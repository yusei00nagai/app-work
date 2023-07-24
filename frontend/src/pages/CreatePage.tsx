// MUIのコンポーネントをインポート、使用するものはここで定義
import { Box, SxProps, Theme } from "@mui/material";

// 使用するコンポートをインポート
import { Header } from "../modules/create/Header";
import { MainContent } from "../modules/create/MainContent";

// タスクを表示するページのメインの実装
export const CreatePage = () => {
  return (
    <Box className="CreatePage" sx={sx}>
      <Header />
      <MainContent />
    </Box>
  );
};

// クラス名に対するスタイルを定義
const sx: SxProps<Theme> = {
  "&.CreatePage": {
    width: "100%",    
  }
};
