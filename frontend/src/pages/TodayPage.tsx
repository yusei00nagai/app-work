import { Box, SxProps, Theme } from "@mui/material";

// 使用するコンポートをインポート
import { Header } from "../modules/today/Header";
import { Mainvisual } from "../modules/today/Mainvisual";
import { Footer } from "../modules/today/Footer";

// サンプルページのメインの実装
export const TodayPage = () => {
  return (
    <Box className="TodayPage" sx={sx}>
      <Header />
      <Mainvisual />
      <Footer />
    </Box>
  );
};

// クラス名に対するスタイルを定義
const sx: SxProps<Theme> = {
  "&.TodayPage": {
    width: "100%",    
  }
};