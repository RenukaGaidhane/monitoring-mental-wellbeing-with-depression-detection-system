import React from "react";
import { Tag, Center } from "@chakra-ui/react";
export default function Footer() {
  return (
    <Center>
      <Tag p={3} mt={4} opacity={0.7} fontSize={"small"}>
        &copy;2024 | All Rights Reserved{" "}
      </Tag>
    </Center>
  );
}
