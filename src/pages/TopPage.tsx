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
      <Box className="AAA">
        <Header />
        <Mainvisual />
        <MainContent />
        <Footer />
      </Box>
    </Box>
  );
};

// クラス名に対するスタイルを定義
const sx: SxProps<Theme> = {
  "&.TopPage": {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  ".AAA" : {
    flex: "1",
  },
};