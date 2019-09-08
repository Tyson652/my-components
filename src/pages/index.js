/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import { Avatar, DefaultHead, Footer } from "../components"
import Tyson from "../images/tyson.jpeg"

export default () => {
  return (
    <DefaultHead>
      <Box sx={{ border: "2px solid red" }}>
        <p>test</p>
        <Avatar size="large" image={Tyson} />
      </Box>
      <Footer />
    </DefaultHead>
  )
}
