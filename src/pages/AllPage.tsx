import { Box, SxProps, Theme } from "@mui/material";

// 使用するコンポートをインポート
import { Header } from "../modules/all/Header";
import { Mainvisual } from "../modules/all/Mainvisual";
import { Footer } from "../modules/all/Footer";

// サンプルページのメインの実装
export const AllPage = () => {
  return (
    <Box className="AllPage" sx={sx}>
      <Header />
      <Mainvisual />
      <Footer />
    </Box>
  );
};

// クラス名に対するスタイルを定義
const sx: SxProps<Theme> = {
  "&.AllPage": {
    width: "100%",    
  }
};