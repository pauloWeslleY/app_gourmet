import { Flex, Icon, VStack, chakra } from "@chakra-ui/react";
import { memo } from "react";
import { useThemeColors } from "../../hooks/useThemeColors";

export function StaticList() {
   const { THEME } = useThemeColors();

   const Feature = (props: any) => {
      return (
         <Flex>
            <Icon
               boxSize={5}
               mt={1}
               mr={2}
               color={THEME.COLORS.TEXT_ICON}
               viewBox={"0 0 20 20"}
               fill={"currentColor"}
            >
               <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
               ></path>
            </Icon>
            <chakra.p
               fontSize={"lg"}
               color={THEME.COLORS.TEXT_LIGHTEN}
               {...props}
            />
         </Flex>
      );
   };

   return (
      <VStack
         direction={"column"}
         flexGrow={1}
         spacing={5}
         alignItems={"start"}
      >
         <Feature>Email APIs, SMTP Relay, and Webhooks</Feature>
         <Feature>Suppression Management</Feature>
         <Feature>Email Tracking and Analytics</Feature>
         <Feature>99.99% Guaranteed Uptime SLA</Feature>
         <Feature>5 Days of Log Retention</Feature>
         <Feature>Limited 24/7 Ticket Support</Feature>
         <Feature>1 Dedicated IP (Foundation 100k and up)</Feature>
         <Feature>1,000 Email Address Validations</Feature>
         <Feature>Host events together or get your event sponsored</Feature>
         <Feature>Reach 90,000 customers via our integration page</Feature>
      </VStack>
   );
}

export default memo(StaticList);
