/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { Avatar } from "../components/Avatar"
import Tyson from "../images/tyson.jpeg"

export default () => {
  return (
    <Box sx={{ border: "2px solid red" }}>
      <p>test</p>
      <Avatar size="large" image={Tyson} />
    </Box>
  )
}
