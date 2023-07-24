import { Box, SxProps, Theme, Link} from "@mui/material";

export const Mainvisual = () => {
  return (
    <Box className="Mainvisual" sx={sx}>
      <Box className="Box1">
        <Link href="/today" className="Link">
          <Box className="Box">今日</Box>
        </Link>
        <Link href="/date" className="Link">
          <Box className="Box">日時指定</Box>
        </Link>
      </Box>
      <Box className="Box2">
        <Link href="all" className="Link">
          <Box className="Box">全て</Box>
        </Link>
        <Link href="end" className="Link">
          <Box className="Box">実行済み</Box>
        </Link>
      </Box>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Mainvisual" : {
    width: "100%",
    backgroundColor: "#f5f5f5"
  },
  ".Box1" : {
    display: "flex",
    justifyContent: "center",
    padding: {
      md: "20px",
      xs: "10px",
    },
  },
  ".Box2" : {
    display: "flex",
    justifyContent: "center",
    padding: {
      md: "20px",
      xs: "10px",
    },
  },
  ".Link" : {
    width: "300px",
    height: {
      md: "150px",
      xs: "90px",
    },
    backgroundColor: "#fff",
    color: "#000",
    fontWeight: "600",
    textDecoration: "none",
    margin: {
      md: "30px",
      xs: "10px ",
    },
    display: "flex",
    justifyContent :"left",
    alignItems: "end",
    borderRadius: "10px",
    fontSize: {
      md: "25px",
      xs: "15px",
    },
  },
  ".Box" : {
    margin: "0 0 14px 20px",
  },
};
