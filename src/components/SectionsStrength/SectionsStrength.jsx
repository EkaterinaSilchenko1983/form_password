import "./SectionsStrength.css";

export const SectionsStrength = ({ password }) => {
  const sectionsStrength = [
    { label: "Easy", className: "easy" },
    { label: "Medium", className: "medium" },
    { label: "Strong", className: "strong" },
  ];

  const getPasswordStrength = () => {
    if (password.length === 0) {
      return "";
    } else if (password.length < 8) {
      return "red";
    } else if (
      password.match(
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/
      )
    ) {
      return "strong";
    } else if (
      password.match(
        /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/
      ) ||
      password.match(/^(?=.*[a-zA-Z])(?=.*\d).*$/) ||
      password.match(/^(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/)
    ) {
      return "medium";
    } else {
      return "easy";
    }
  };

  return (
    <>
      {sectionsStrength.map((section, index) => (
        <div className="pass-strength" key={index}>
          <div
            className={
              getPasswordStrength() === "red"
                ? "strength-section red"
                : "strength-section"
            }
          >
            <span
              className={
                getPasswordStrength() === section.className
                  ? section.className
                  : ""
              }
            ></span>
          </div>
          <span className="strength-label">{section.label}</span>
        </div>
      ))}
    </>
  );
};
