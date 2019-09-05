/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

export const LinkIcon = ({ iconUrl, linkUrl }) => (
  <Styled.a href={linkUrl} target="_blank">
    <Styled.img src={iconUrl} sx={{ width: 4, marginRight: 4 }} />
  </Styled.a>
)
