/** @jsx jsx */
import { Box, Flex, jsx, Styled } from "theme-ui"

import { Avatar } from "../Avatar"

export const PersonGroup = ({ title, people }) => (
  <Box>
    <Heading>{title}</Heading>
    {people.map((person, index) => (
      <PersonBox key={index}>
        <Avatar image={person.avatarUrl} />
        <TextBox>
          <Name>{person.name}</Name>
          <Description>
            <Styled.a href={person.companyUrl} target="_blank">
              {person.company}
            </Styled.a>
          </Description>
        </TextBox>
      </PersonBox>
    ))}
  </Box>
)

const Heading = ({ children }) => (
  <Styled.p
    sx={{
      variant: "textStyles.title",
      margin: 0,
      paddingBottom: [4, 6, 6],
    }}
  >
    {children}
  </Styled.p>
)

const PersonBox = ({ children }) => (
  <Flex
    sx={{
      padding: 3,
    }}
  >
    {children}
  </Flex>
)

const TextBox = ({ children }) => (
  <Flex
    sx={{
      flexDirection: "column",
      justifyContent: "center",
      paddingLeft: 4,
    }}
  >
    {children}
  </Flex>
)

const Name = ({ children }) => (
  <Styled.p
    sx={{
      margin: 0,
      variant: "textStyles.modern",
      color: "mutedText",
      fontSize: [3, 3, 3],
    }}
  >
    {children}
  </Styled.p>
)

const Description = ({ children }) => (
  <Styled.p
    sx={{
      margin: 0,
      fontFamily: "modern",
      fontSize: [1, 2, 2],
    }}
  >
    {children}
  </Styled.p>
)
