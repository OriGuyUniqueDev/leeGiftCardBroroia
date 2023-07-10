import { FunctionComponent } from "react";

interface DescAndConnectProps {}

const DescAndConnect: FunctionComponent<DescAndConnectProps> = () => {
  return (
    <div className="text-center">
      <p className="fifth text-xl font-medium ">
        שובר זה מעניק לך טיפול לק ג’ל מתנה !
      </p>
      <p className="sixth">
        לקביעת תור דרך הוואטסאפ{" "}
        <a
          className="underline"
          href="https://api.whatsapp.com/message/5DH5GQGGGTY3K1?autoload=1&app_absent=0"
        >
          לחצי כאן
        </a>{" "}
      </p>
    </div>
  );
};

export default DescAndConnect;
