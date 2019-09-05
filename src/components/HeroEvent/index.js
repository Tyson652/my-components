/** @jsx jsx */
import { Box, Flex, jsx, Styled } from "theme-ui"
import { IconButton } from "../buttons/index"

import { Logo } from "../Logo"

export const HeroEventMeetup = ({
  heading,
  date,
  children,
  siteYaml,
  background,
  logoUrl,
}) => {
  const {
    buttonIconName,
    buttonIconPrefix,
    buttonText,
    buttonHref,
  } = siteYaml.iconButton
  const { subHeading1, subHeading2 } = siteYaml.heroEvent
  return (
    <Flex
      sx={{
        variant: "textStyles.heading",
        backgroundColor: "brandDark",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundBlendMode: "overlay",
        width: "100vw",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: ["wrap", "nowrap", "nowrap"],
        paddingTop: "70px",
        height: ["100vh", "100vh", "100vh", "100vh", "70vh"],
        minHeight: "550px",
      }}
    >
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: ["center", "baseline", "baseline"],
        }}
      >
        <Logo size="large" logoUrl={logoUrl} />
        <Heading>{heading}</Heading>
        <Flex
          sx={{
            flexDirection: "column",
            minHeight: "250px",
            justifyContent: "space-between",
          }}
        >
          <SubHeadingBox>
            <SubHeading position="right" weight="light">
              {subHeading1}
            </SubHeading>
            <SubHeading position="left" weight="body">
              {date}
            </SubHeading>
          </SubHeadingBox>
          <Flex
            sx={{
              justifyContent: ["center", "flex-start", "flex-start"],
              flexDirection: ["column", "row", "row"],
              textAlign: "center",
            }}
          >
            <SubHeading position="null" weight="light">
              {subHeading2}
            </SubHeading>
            <Box>
              <IconButton
                iconName={buttonIconName}
                iconPrefix={buttonIconPrefix}
                text={buttonText}
                eventLink={buttonHref}
              />
            </Box>
          </Flex>
        </Flex>
      </Flex>
      {children}
    </Flex>
  )
}

const Heading = ({ children }) => (
  <Styled.h1
    sx={{
      margin: "auto",
      textAlign: "center",
      fontSize: [6, 9, 9],
      color: "background",
      variant: "textStyles.heading",
      marginY: 3,
      fontWeight: "body",
    }}
  >
    {children}
  </Styled.h1>
)

const SubHeadingBox = ({ children }) => (
  <Flex
    sx={{
      flexDirection: ["row", "row", "row"],
      paddingX: 3,
      paddingY: [1, 1, 1],
    }}
  >
    {children}
  </Flex>
)

const SubHeading = ({ children, position, weight }) => (
  <Styled.h2
    sx={{
      color: "background",
      fontSize: [4, 5, 5],
      marginLeft: position === "right" ? "auto" : "0",
      marginRight: position === "left" ? "auto" : "0",
      marginY: position === ("right" || "left") ? "0" : "auto",
      font: "heading",
      fontWeight: weight,
      paddingX: 3,
    }}
  >
    {children}
  </Styled.h2>
)
