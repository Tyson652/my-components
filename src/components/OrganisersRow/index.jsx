/** @jsx jsx */
import { jsx, Box, Flex, Styled, Container } from "theme-ui";

import { Avatar } from "../Avatar";




export const OrganisersRow = ({
  organisersTitle,
  people
}) => {
  return (
    <Container>
      <Box sx={{ width: "100%", marginTop: [5, 0, 0] }}>
        <Flex
          sx={{
            width: "100%",
            flexDirection: "column"
          }}
        >
          <Heading>{organisersTitle} </Heading>
          <Flex
            sx={{
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {people.map((person, i) => (
              <PersonBox key={i}>
                <Avatar size="small" image={person.avatarUrl} />
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
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};



const PersonBox = ({ children }) => (
  <Flex
    sx={{
      padding: 3,
      alignItems: "center",
      width: "33.3%",
      justifyContent: ["flex-start", "center", "center"],
      minWidth: 250
    }}
  >
    {children}
  </Flex>
);

const TextBox = ({ children }) => (
  <Flex
    sx={{
      paddingLeft: 4,
      flexDirection: "column"
    }}
  >
    {children}
  </Flex>
);

const Heading = ({ children }) => (
  <Styled.p
    sx={{
      variant: "textStyles.title",
      margin: 0,
      paddingBottom: 6,
      paddingTop: 5,
      fontSize: 5,
      fontWeight: "body",
      textAlign: "center"
    }}
  >
    {children}
  </Styled.p>
);

const Name = ({ children }) => (
  <Styled.p
    sx={{
      margin: 0,
      variant: "textStyles.modern",
      color: "mutedText",
      fontSize: [3, 3, 3]
    }}
  >
    {children}
  </Styled.p>
);

const Description = ({ children }) => (
  <Styled.p
    sx={{
      margin: 0,
      fontFamily: "modern",
      fontSize: [1, 2, 2]
    }}
  >
    {children}
  </Styled.p>
);
