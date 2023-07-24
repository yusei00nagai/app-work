import { Box, SxProps, Theme } from "@mui/material";

// 使用するコンポートをインポート
import { Header } from "../modules/date/Header";
import { Mainvisual } from "../modules/date/Mainvisual";
import { Footer } from "../modules/date/Footer";

// サンプルページのメインの実装
export const DatePage = () => {
  return (
    <Box className="DatePage" sx={sx}>
      <Header />
      <Mainvisual />
      <Footer />
    </Box>
  );
};

// クラス名に対するスタイルを定義
const sx: SxProps<Theme> = {
  "&.DatePage": {
    width: "100%",    
  }
};