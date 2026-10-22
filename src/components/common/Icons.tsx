import React from "react";
import {
  IconTool,
  IconStethoscope,
  IconEyeglass2,
  IconServer2,
  IconShieldCheck,
  IconBolt,
  IconCalendarCheck,
  IconBuildingSkyscraper,
  IconMessageCircle2,
  IconBrandWhatsapp,
  IconMail,
  IconPhone,
  IconMapPin,
  IconClock,
  IconRosetteDiscountCheck,
  IconCircleCheck,
  IconAlertCircle,
  IconSend,
  IconHeadset,
  IconUsersGroup,
  IconRocket,
  IconCode,
  IconBuildingStore,
  IconLock,
  IconMaximize,
  IconX,
  IconSun,
  IconMoon,
  IconWorld,
  IconMenu2,
  IconArrowUpRight,
  IconArrowRight,
  IconChevronDown,
  IconCheck,
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandFacebook,
  IconLoader2,
  IconArrowUp,
  IconChevronsRight,
} from "@tabler/icons-react";

type IconComponentProps = {
  className?: string;
  size?: number | string;
  "aria-hidden"?: boolean;
};

function wrapTabler(
  TablerComp: React.ComponentType<{
    className?: string;
    size?: number | string;
    stroke?: number;
  }>,
  defaultStroke = 1.75
) {
  const Wrapped = ({ className, size = "1.15em", ...rest }: IconComponentProps) => (
    <TablerComp
      className={className}
      size={size}
      stroke={defaultStroke}
      aria-hidden="true"
      {...rest}
    />
  );
  return Wrapped;
}

export const ToolboxDuo = wrapTabler(IconTool);
export const StethoscopeDuo = wrapTabler(IconStethoscope);
export const EyeglassesDuo = wrapTabler(IconEyeglass2);
export const HardDrivesDuo = wrapTabler(IconServer2);
export const ShieldCheckDuo = wrapTabler(IconShieldCheck);
export const LightningDuo = wrapTabler(IconBolt);
export const CalendarCheckDuo = wrapTabler(IconCalendarCheck);
export const BuildingsDuo = wrapTabler(IconBuildingSkyscraper);
export const ChatCircleTextDuo = wrapTabler(IconMessageCircle2);
export const WhatsappLogoDuo = wrapTabler(IconBrandWhatsapp);
export const EnvelopeSimpleDuo = wrapTabler(IconMail);
export const PhoneDuo = wrapTabler(IconPhone);
export const MapPinDuo = wrapTabler(IconMapPin);
export const ClockDuo = wrapTabler(IconClock);
export const SealCheckDuo = wrapTabler(IconRosetteDiscountCheck);
export const CheckCircleDuo = wrapTabler(IconCircleCheck);
export const WarningCircleDuo = wrapTabler(IconAlertCircle);
export const PaperPlaneTiltDuo = wrapTabler(IconSend);
export const HeadsetDuo = wrapTabler(IconHeadset);
export const HandshakeDuo = wrapTabler(IconUsersGroup);
export const RocketLaunchDuo = wrapTabler(IconRocket);
export const CodeDuo = wrapTabler(IconCode);
export const StorefrontDuo = wrapTabler(IconBuildingStore);
export const LockSimple = wrapTabler(IconLock);
export const ArrowsOutSimple = wrapTabler(IconMaximize);
export const X = wrapTabler(IconX);
export const Sun = wrapTabler(IconSun);
export const Moon = wrapTabler(IconMoon);
export const GlobeSimple = wrapTabler(IconWorld);
export const List = wrapTabler(IconMenu2);
export const ArrowUpRight = wrapTabler(IconArrowUpRight);
export const ArrowRight = wrapTabler(IconArrowRight);
export const CaretDown = wrapTabler(IconChevronDown);
export const Check = wrapTabler(IconCheck);
export const LinkedinLogo = wrapTabler(IconBrandLinkedin);
export const GithubLogo = wrapTabler(IconBrandGithub);
export const InstagramLogo = wrapTabler(IconBrandInstagram);
export const FacebookLogo = wrapTabler(IconBrandFacebook);
export const CircleNotch = wrapTabler(IconLoader2);
export const ArrowUp = wrapTabler(IconArrowUp);
export const CaretDoubleRight = wrapTabler(IconChevronsRight);
