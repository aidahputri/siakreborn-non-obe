import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useAuth from "@/commons/auth";

const MenuItem = ({ route, label, subMenus, isCollapsed }) => {
  const { checkPermission } = useAuth();
  if (subMenus?.length > 0) {
    return (
      <>
        {subMenus.some((subMenu) => checkPermission(subMenu.permission)) && (
          <li>
            <details open={!isCollapsed}>
              <summary className="text-base">{label}</summary>
              <ul>
                {subMenus.map((menu) => (
                  <>
                    {checkPermission(menu.permission) && (
                      <MenuItem {...menu} key={menu.label} />
                    )}
                  </>
                ))}
              </ul>
            </details>
          </li>
        )}
      </>
    );
  }

  return (
    <li>
      <Link to={route} className="text-base">
        {label}
      </Link>
    </li>
  );
};

MenuItem.propTypes = {
  route: PropTypes.string,
  label: PropTypes.string.isRequired,
  subMenus: PropTypes.arrayOf(PropTypes.shape(this)),
  isCollapsed: PropTypes.bool,
};

export default MenuItem;
