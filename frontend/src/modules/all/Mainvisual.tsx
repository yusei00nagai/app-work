import { Box, SxProps, Theme } from "@mui/material";
import { MainContent } from "../create/MainContent";    //createの関数


// { MainContent };      //こんな感じで使えると思ったけど何もなにも表示されず、、、

export const Mainvisual = () => {
  return (
    <Box className="Mainvisual" sx={sx}>
      <Box>
        [MainContent]  {/* こんな感じで使えると思ったけど何もなにも表示されず、、、 */}
      </Box>
    </Box>
    
  );
};

const sx: SxProps<Theme> = {
  "&.Mainvisual" : {
    width: "100%",
  },
};