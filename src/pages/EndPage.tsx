import { Box, SxProps, Theme } from "@mui/material";

// 使用するコンポートをインポート
import { Header } from "../modules/end/Header";
import { Mainvisual } from "../modules/end/Mainvisual";
import { Footer } from "../modules/end/Footer";

// サンプルページのメインの実装
export const EndPage = () => {
  return (
    <Box className="EndPage" sx={sx}>
      <Header />
      <Mainvisual />
      <Footer />
    </Box>
  );
};

// クラス名に対するスタイルを定義
const sx: SxProps<Theme> = {
  "&.EndPage": {
    width: "100%",    
  }
};