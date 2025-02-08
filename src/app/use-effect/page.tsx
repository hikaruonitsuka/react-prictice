import Typography from "@/components/common/Typography";
import Link from "next/link";

export default function UseEffect() {
  return (
    <div>
      <Typography component="h1" variant="h1">useEffect</Typography>
      <Typography className="mt-4">
        useEffectは、<strong>コンポーネントを外部システムと同期させる</strong>
        ためのReact組み込みのフックのこと
      </Typography>
      <Typography component="h2" variant="h2" className="mt-8">ユースケース</Typography>
      <ul className="mt-2">
        <li>
          レンダリング後に何かしらの外部システムなどと連携を取りたい場合に利用
        </li>
        <li>
          主にReactで制御されていないシステムと連携する場合に利用する（ブラウザ組み込みのAPIなど）
        </li>
      </ul>
      <Link
        href="https://ja.react.dev/reference/react/useEffect"
        target="_blank"
      >
        React公式サイト
      </Link>
      <ul>
        <li></li>
      </ul>
    </div>
  );
}
