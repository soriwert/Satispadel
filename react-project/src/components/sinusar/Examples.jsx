import DataPlayer from "../jugadores/DataPlayer.jsx";
import TabButton from "./TabButton.jsx";
import { useState } from "react";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return (
    <Section id="examples" title={"JUGADORES"}>
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "Jeni"}
              onClick={() => handleSelect("Jeni")}
            >
              Jeni
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "Patri"}
              onClick={() => handleSelect("Patri")}
            >
              Patri
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "Joseph"}
              onClick={() => handleSelect("Joseph")}
            >
              Joseph
            </TabButton>
          </>
        }
      >
        {selectedTopic ? (
          <DataPlayer selectedTopic={selectedTopic} />
        ) : (
          <p>Por favor selecciona un jugador</p>
        )}
      </Tabs>
    </Section>
  );
}
