import { Box, SxProps, Theme } from "@mui/material";

// 使用するコンポートをインポート
import { Header } from "../modules/top/Header";
import { Mainvisual } from "../modules/top/Mainvisual";
import { MainContent } from "../modules/top/MainContent";
import { Footer } from "../modules/top/Footer";

// サンプルページのメインの実装
export const TopPage = () => {
  return (
    <Box className="TopPage" sx={sx}>
      <Header />
      <Mainvisual />
      <MainContent />
      <Footer />
    </Box>
  );
};

// クラス名に対するスタイルを定義
const sx: SxProps<Theme> = {
  "&.TopPage": {
    width: "100%",    
  }
};