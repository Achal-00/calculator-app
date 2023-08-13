import { useEffect, useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState(1);

  useEffect(() => {
    if (theme === 1) {
      document.querySelector(".theme-1 span").style.display = "grid";
      document.querySelector(".theme-2 span").style.display = "none";
      document.querySelector(".theme-3 span").style.display = "none";

      document.querySelector("body").style.background = "hsl(222, 26%, 31%)";
      document.querySelector(".left-side h1").style.color = "hsl(30, 25%, 89%)";
      document.querySelector(".right-side > p").style.color =
        "hsl(30, 25%, 89%)";
      document
        .querySelectorAll(".theme-changer p")
        .forEach((x) => (x.style.color = "hsl(30, 25%, 89%)"));
      document.querySelector(".theme-changer-background").style.background =
        "hsl(223, 31%, 20%)";
      document
        .querySelectorAll(".theme-1 span, .theme-2 span, .theme-3 span")
        .forEach((x) => (x.style.background = "hsl(6, 63%, 50%)"));
      document.querySelector(".display").style.background =
        "hsl(224, 36%, 15%)";
      document.querySelector(".display").style.color = "hsl(0, 0%, 100%)";
      document.querySelector(".button-container").style.background =
        "hsl(223, 31%, 20%)";
      document
        .querySelectorAll(".common-key")
        .forEach((x) => (x.style.background = "hsl(30, 25%, 89%)"));
      document.querySelectorAll(".common-key").forEach((x) =>
        x.addEventListener("mouseenter", () => {
          x.style.background = "hsl(0, 0%, 100%)";
        })
      );
      document.querySelectorAll(".common-key").forEach((x) =>
        x.addEventListener("mouseleave", () => {
          x.style.background = "hsl(30, 25%, 89%)";
        })
      );
      document
        .querySelectorAll(".common-key")
        .forEach((x) => (x.style.color = "hsl(221, 14%, 31%)"));
      document
        .querySelectorAll(".common-key")
        .forEach((x) => (x.style.borderBottom = "5px solid hsl(28, 16%, 65%)"));
      document
        .querySelectorAll(".del, .reset")
        .forEach((x) => (x.style.background = "hsl(225, 21%, 49%)"));
      document.querySelectorAll(".del, .reset").forEach((x) =>
        x.addEventListener("mouseenter", () => {
          x.style.background = "hsl(226, 23%, 71%)";
        })
      );
      document.querySelectorAll(".del, .reset").forEach((x) =>
        x.addEventListener("mouseleave", () => {
          x.style.background = "hsl(225, 21%, 49%)";
        })
      );
      document
        .querySelectorAll(".del, .reset")
        .forEach((x) => (x.style.color = "hsl(30, 25%, 89%)"));
      document
        .querySelectorAll(".del, .reset")
        .forEach(
          (x) => (x.style.borderBottom = "5px solid hsl(224, 28%, 35%)")
        );
      document.querySelector(".equals").style.background = "hsl(6, 63%, 50%)";
      document.querySelector(".equals").addEventListener("mouseenter", () => {
        document.querySelector(".equals").style.background = "hsl(6, 54%, 60%)";
      });
      document.querySelector(".equals").addEventListener("mouseleave", () => {
        document.querySelector(".equals").style.background = "hsl(6, 63%, 50%)";
      });
      document.querySelector(".equals").style.color = "hsl(30, 25%, 89%)";
      document.querySelector(".equals").style.borderBottom =
        "5px solid hsl(6, 70%, 34%)";
    } else if (theme === 2) {
      document.querySelector(".theme-1 span").style.display = "none";
      document.querySelector(".theme-2 span").style.display = "grid";
      document.querySelector(".theme-3 span").style.display = "none";

      document.querySelector("body").style.background = "hsl(0, 0%, 90%)";
      document.querySelector(".left-side h1").style.color = "hsl(60, 10%, 19%)";
      document.querySelector(".right-side > p").style.color =
        "hsl(60, 10%, 19%)";
      document
        .querySelectorAll(".theme-changer p")
        .forEach((x) => (x.style.color = "hsl(60, 10%, 19%)"));
      document.querySelector(".theme-changer-background").style.background =
        "hsl(0, 5%, 81%)";
      document
        .querySelectorAll(".theme-1 span, .theme-2 span, .theme-3 span")
        .forEach((x) => (x.style.background = "hsl(25, 98%, 40%)"));
      document.querySelector(".display").style.background = "hsl(0, 0%, 93%)";
      document.querySelector(".display").style.color = "hsl(60, 10%, 19%)";
      document.querySelector(".button-container").style.background =
        "hsl(0, 5%, 81%)";
      document
        .querySelectorAll(".common-key")
        .forEach((x) => (x.style.background = "hsl(45, 7%, 89%)"));
      document.querySelectorAll(".common-key").forEach((x) =>
        x.addEventListener("mouseenter", () => {
          x.style.background = "hsl(0, 0%, 100%)";
        })
      );
      document.querySelectorAll(".common-key").forEach((x) =>
        x.addEventListener("mouseleave", () => {
          x.style.background = "hsl(45, 7%, 89%)";
        })
      );
      document
        .querySelectorAll(".common-key")
        .forEach((x) => (x.style.color = "hsl(221, 14%, 31%)"));
      document
        .querySelectorAll(".common-key")
        .forEach((x) => (x.style.borderBottom = "5px solid hsl(35, 11%, 61%)"));
      document
        .querySelectorAll(".del, .reset")
        .forEach((x) => (x.style.background = "hsl(185, 42%, 37%)"));
      document.querySelectorAll(".del, .reset").forEach((x) =>
        x.addEventListener("mouseenter", () => {
          x.style.background = "hsl(185, 27%, 57%)";
        })
      );
      document.querySelectorAll(".del, .reset").forEach((x) =>
        x.addEventListener("mouseleave", () => {
          x.style.background = "hsl(185, 42%, 37%)";
        })
      );
      document
        .querySelectorAll(".del, .reset")
        .forEach((x) => (x.style.color = "hsl(0, 0%, 100%)"));
      document
        .querySelectorAll(".del, .reset")
        .forEach(
          (x) => (x.style.borderBottom = "5px solid hsl(185, 58%, 25%)")
        );
      document.querySelector(".equals").style.background = "hsl(25, 98%, 40%)";
      document.querySelector(".equals").addEventListener("mouseenter", () => {
        document.querySelector(".equals").style.background =
          "hsl(25, 81%, 55%)";
      });
      document.querySelector(".equals").addEventListener("mouseleave", () => {
        document.querySelector(".equals").style.background =
          "hsl(25, 98%, 40%)";
      });
      document.querySelector(".equals").style.color = "hsl(0, 0%, 100%)";
      document.querySelector(".equals").style.borderBottom =
        "5px solid hsl(25, 99%, 27%)";
    } else {
      document.querySelector(".theme-1 span").style.display = "none";
      document.querySelector(".theme-2 span").style.display = "none";
      document.querySelector(".theme-3 span").style.display = "grid";

      document.querySelector("body").style.background = "hsl(268, 75%, 9%)";
      document.querySelector(".left-side h1").style.color =
        "hsl(52, 100%, 62%)";
      document.querySelector(".right-side > p").style.color =
        "hsl(52, 100%, 62%)";
      document
        .querySelectorAll(".theme-changer p")
        .forEach((x) => (x.style.color = "hsl(52, 100%, 62%)"));
      document.querySelector(".theme-changer-background").style.background =
        "hsl(268, 71%, 12%)";
      document
        .querySelectorAll(".theme-1 span, .theme-2 span, .theme-3 span")
        .forEach((x) => (x.style.background = "hsl(176, 100%, 44%)"));
      document.querySelector(".display").style.background =
        "hsl(268, 71%, 12%)";
      document.querySelector(".display").style.color = "hsl(52, 100%, 62%)";
      document.querySelector(".button-container").style.background =
        "hsl(268, 71%, 12%)";
      document
        .querySelectorAll(".common-key")
        .forEach((x) => (x.style.background = "hsl(268, 47%, 21%)"));
      document.querySelectorAll(".common-key").forEach((x) =>
        x.addEventListener("mouseenter", () => {
          x.style.background = "hsl(268, 61%, 34%)";
        })
      );
      document.querySelectorAll(".common-key").forEach((x) =>
        x.addEventListener("mouseleave", () => {
          x.style.background = "hsl(268, 47%, 21%)";
        })
      );
      document
        .querySelectorAll(".common-key")
        .forEach((x) => (x.style.color = "hsl(52, 100%, 62%)"));
      document
        .querySelectorAll(".common-key")
        .forEach(
          (x) => (x.style.borderBottom = "5px solid hsl(290, 70%, 36%)")
        );
      document
        .querySelectorAll(".del, .reset")
        .forEach((x) => (x.style.background = "hsl(281, 89%, 26%)"));
      document.querySelectorAll(".del, .reset").forEach((x) =>
        x.addEventListener("mouseenter", () => {
          x.style.background = "hsl(281, 89%, 38%)";
        })
      );
      document.querySelectorAll(".del, .reset").forEach((x) =>
        x.addEventListener("mouseleave", () => {
          x.style.background = "hsl(281, 89%, 26%)";
        })
      );
      document
        .querySelectorAll(".del, .reset")
        .forEach((x) => (x.style.color = "hsl(0, 0%, 100%)"));
      document
        .querySelectorAll(".del, .reset")
        .forEach(
          (x) => (x.style.borderBottom = "5px solid hsl(285, 91%, 52%)")
        );
      document.querySelector(".equals").style.background =
        "hsl(176, 100%, 44%)";
      document.querySelector(".equals").addEventListener("mouseenter", () => {
        document.querySelector(".equals").style.background =
          "hsl(176, 83%, 72%)";
      });
      document.querySelector(".equals").addEventListener("mouseleave", () => {
        document.querySelector(".equals").style.background =
          "hsl(176, 100%, 44%)";
      });
      document.querySelector(".equals").style.color = "hsl(198, 20%, 13%)";
      document.querySelector(".equals").style.borderBottom =
        "5px solid hsl(177, 92%, 70%)";
    }
  }, [theme]);

  return (
    <div className="header-container">
      <div className="left-side">
        <h1>calc</h1>
      </div>
      <div className="right-side">
        <p>THEME</p>
        <div className="theme-changer">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <div className="theme-changer-background"></div>
          <div className="theme-1" onClick={() => setTheme(1)}>
            <span></span>
          </div>
          <div className="theme-2" onClick={() => setTheme(2)}>
            <span></span>
          </div>
          <div className="theme-3" onClick={() => setTheme(3)}>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
