import { Box, SxProps, Theme, Link} from "@mui/material";

export const Mainvisual = () => {
  return (
    <Box className="Mainvisual" sx={sx}>
      <Box className="Box1">
        <Link href="#" className="Box">今日</Link>
        <Link href="#" className="Box">日時指定</Link>
      </Box>
      <Box className="Box2">
        <Link href="#" className="Box">全て</Link>
        <Link href="#" className="Box">実行済み</Link>
      </Box>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Mainvisual" : {
    width: "100%",
  },
  ".Box1" : {
    display: "flex",
    // justifyContent: "center",
    padding: {
      md: "20px",
      xs: "10px",
    },
  },
  ".Box2" : {
    display: "flex",
    // justifyContent: "center",
    padding: {
      md: "20px",
      xs: "10px",
    },
  },
  ".Box" : {
    width: "300px",
    backgroundColor: "#e0ffff",
    paddingBottom: {
      md: "150px",
      xs: "80px",
    },
    margin: {
      md: "30px",
      xs: "10px",
    },
    display: "flex",
    justifyContent :"center",
    alignItems: "center",
    // textAlign: "center",
    // verticalAlign: "middle",
    borderRadius: "10px",
    fontSize: {
      md: "25px",
      xs: "15px",
    },
  }
};
