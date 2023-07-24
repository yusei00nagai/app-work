import { Box, SxProps, Theme, Link} from "@mui/material";

export const Footer = () => {
  return (
    <Box className="Footer" sx={sx}>
      <Box className="BBox">
        <Box className="Box">
          <Link href="/create" className="Link">
            <Box className="Box">+新規</Box>
          </Link>
          <Link href="#" className="Link">
            <Box className="Box">+共有</Box>
          </Link>
          <Link href="#" className="Link">
            <Box className="Box">+リスト追加</Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Footer" : {
    width: "100%",
    backgroundColor: "#f5f5f5",

  },
  ".BBox" : {
    // position: "fixed",
    // bottom: "0",
    // left: "0",
  },
  ".Box" : {
    display: "flex",
    justifyContent: "space-around",
  },
  ".Link" : {
  }
};