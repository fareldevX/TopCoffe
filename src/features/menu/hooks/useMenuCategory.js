import { useState } from "react";

function useMenuCategory() {
  const [category, setCategory] = useState("COFFEE");
  return { category, setCategory };
}

export default useMenuCategory;
