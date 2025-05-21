import { css } from "@emotion/css";
import plural from "../../utils/plural.ts";

const classes = {
  logoContainer: css({
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  }),
  logo: css({
    height: "15em",
    padding: "1.5em",
    willChange: "filter",
    transition: "filter 300ms",
    "&:hover": {
      filter: "drop-shadow(0 0 2em #61dafbaa)",
    },
  }),
  counter: css({
    padding: "2em",
    border: "1px solid transparent",
    button: {
      fontSize: "2em",
      "&:hover": {
        borderColor: "#61dafb",
      },
    },
  }),
};

const VOTES_PLURAL_TITLES = ["голос", "голоса", "голосов"];

interface RemoteLogoProps {
  count: number;
  onCounterClick: () => void;
}

export default function RemoteLogo(props: RemoteLogoProps) {
  const { count, onCounterClick } = props;

  return (
    <div className={classes.logoContainer}>
      <a href="https://react.dev" target="_blank">
        <img
          src={`${import.meta.env.BASE_URL}/react.svg`}
          className={classes.logo}
          alt="React logo"
        />
      </a>
      <div className={classes.counter}>
        <button onClick={() => onCounterClick()}>
          {count} {plural(count, VOTES_PLURAL_TITLES)}
        </button>
      </div>
    </div>
  );
}
