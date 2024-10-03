import React, { useState } from "react";

export default function Header({
  appName,
  userName,
  onUserSettings,
  onSignOut,
}) {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleUserSettings = () => {
    onUserSettings();
    setDropdownVisible(false);
  };

  const handleSignOut = () => {
    onSignOut();
    setDropdownVisible(false);
  };

  return (
    <header style={styles.header}>
      <div style={styles.appName}>{appName}</div>
      <div style={styles.userSection}>
        <div onClick={toggleDropdown} style={styles.userName}>
          {userName}
        </div>
        {dropdownVisible && (
          <div style={styles.dropdownMenu}>
            <div
              onClick={handleUserSettings}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#f0f2f5")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#fff")}
              style={styles.dropdownItem}
            >
              User Settings
            </div>
            <div
              onClick={handleSignOut}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#f0f2f5")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#fff")}
              style={styles.dropdownItem}
            >
              Sign Out
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
  },
  appName: {
    fontSize: "1.5em",
    fontWeight: "bold",
  },
  userSection: {
    position: "relative",
  },
  userName: {
    cursor: "pointer",
  },
  dropdownMenu: {
    position: "absolute",
    top: "100%",
    right: 0,
    width: "150px",
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: "4px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    marginTop: "10px",
  },
  dropdownItem: {
    padding: "10px 20px",
    cursor: "pointer",
    borderBottom: "1px solid #ccc",
  },
  dropdownItemLast: {
    borderBottom: "none",
  },
};
