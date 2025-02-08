import Typography from "@/components/common/Typography";

export default function Home() {
  return (
    <div>
      <Typography component="h1" variant="h1">
        React練習用リポジトリです。
      </Typography>
      <Typography className="mt-4">
        ライブラリや組み込みフックの使い方などを勉強・検証するために作成。
      </Typography>
    </div>
  );
}
