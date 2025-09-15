import { useEffect } from "react";

export default function Ex03() {
  useEffect(() => {
    console.log("%cWelcome render lần đầu", "color:green");
  }, []);

  return (
    <div>
      <h1>Chào mừng bạn đến với ứng dụng của chúng tôi!</h1>
    </div>
  );
}