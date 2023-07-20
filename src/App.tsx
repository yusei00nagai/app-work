// MUIのコンポーネントをインポート、使用するものはここで定義
import { Box, SxProps, Theme } from "@mui/material";

// 使用するコンポートをインポート
import { Route, Routes } from "react-router-dom";
import { TopPage } from "./pages/TopPage";
import { TodayPage } from "./pages/TodayPage";
import { DatePage } from "./pages/DatePage";
import { AllPage } from "./pages/AllPage";
import { EndPage } from "./pages/EndPage";
import { SamplePage } from "./pages/SamplePage";

// Appのメインの実装（表示する画面とpathを定義）
export const App = () => {
  return (
    <Box className="App" sx={sx}>
      <Routes>
        {/* トップページ*/}
        <Route path="/" element={<TopPage />} />
        {/*トゥデイページ*/}
        <Route path="/today" element={<TodayPage />} />
        {/*デイトページ*/}
        <Route path="/date" element={<DatePage />} />
        {/*オールページ*/}
        <Route path="/all" element={<AllPage />} />
        {/*フィニッシュページ*/}
        <Route path="/end" element={<EndPage />} />
        {/*動的ページ*/}
        <Route path="/1" element={<AllPage />} />
        {/* サンプルページ */}
        <Route path="/sample" element={<SamplePage />} />
      </Routes>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.App": {
    width: "100%",
  }
};
