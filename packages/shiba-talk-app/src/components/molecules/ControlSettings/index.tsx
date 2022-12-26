import React from "react";

// component
import Button from "@atoms/Button";
import CircleImage from "@atoms/CircleImage";
import Icon from "@atoms/Icon";
import { MessengerSVG, NotificationSVG } from "@atoms/svg";

// style
import "./index.scss";

const PREFIX = "shiba-control-settings";

const ControlSettings: React.FC<{}> = () => {
  const href =
    "https://scontent.fsgn2-1.fna.fbcdn.net/v/t39.30808-1/290873204_1401951403641858_8722845100338118315_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=k9edp3p4qV4AX8rfmYe&_nc_ht=scontent.fsgn2-1.fna&oh=00_AfAotzQRHsyTDWLagO-bSvo9gmx9GEFWR4_X_B8l1qLx1A&oe=63A92750";

    const messengerIcon = (
      <Icon size="sm">
        <MessengerSVG color="primary" />
      </Icon>
    );

    const notificationIcon = (
      <Icon size="sm">
        <NotificationSVG color="primary" />
      </Icon>
    )
  const personalIcon = <CircleImage width="28" height="28" href={href} />;

  const messenger = (
    <div className={`${PREFIX}__messenger`}>
      <Button
        label="Messenger"
        icon={messengerIcon}
        iconOnly={true}
        variant="circle"
      />
    </div>
  );

  const notification = (
    <div className={`${PREFIX}__notification`}>
      <Button
        label="Notification"
        icon={notificationIcon}
        iconOnly={true}
        variant="circle"
      />
    </div>
  );

  const personalSetting = (
    <span className={`${PREFIX}__personalization`}>
      <Button
        label="My label"
        icon={personalIcon}
        variant="circle"
        iconOnly={true}
      />
    </span>
  );

  return (
    <div className={PREFIX}>
      {personalSetting}
      {notification}
      {messenger}
    </div>
  );
};

export default ControlSettings;
