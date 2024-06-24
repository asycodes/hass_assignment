import React, { useEffect, useState } from 'react';
import './NaysayerTemplate.css';

const NaysayerTemplate = ({ section }) => {
  const [content, setContent] = useState({
    intro: "Environmental Advocate, Hypocrite?",
    body: "As previously mentioned in our section on evaluating the Chinese One Belt, One Road initiative, a particular critique of the initiative is its potential environmental impact. This critique, primarily voiced by Western observers, highlights the environmental harm that may arise from pushing the project forward in the name of progress. For instance, the planned construction of six coal-based power plants in Pakistan, with a combined output capacity equal to 27 percent of the country’s current capacity, has been criticized as environmentally unsustainable. In a journal authored by Western researchers, Arden Radford et al. claim that China and the countries benefiting from the OBOR initiative have lax environmental regulations (Radford et al., 2021, Chapter Introduction). Such biases against China and OBOR recipient countries are evident even in analyses not specifically focused on the initiative.  Beyond Pakistan, similar concerns have been raised in other countries participating in OBOR. For example, infrastructure projects in Africa, such as the construction of highways and railways, have faced scrutiny for potential deforestation and disruption of local ecosystems. Western critics argue that these projects prioritize economic growth over environmental protection, leading to long-term ecological damage. We can analyze these claims through a historical lens. In Seeing Like a State, James C. Scott argued against the value of high-modernism and its implications, particularly how agritech advancements had a negative impact on the environment (Scott, 1998, Chapter 8). The fervent push for technological advancement by the West, despite the negative environmental impact, mirrors the current critique of China's OBOR initiative. This historical parallel suggests that Western critiques may stem from a learned lesson about the pitfalls of unchecked development. However, others may argue that this critique is hypocritical, considering the West's own historical environmental transgressions, a kind of critique of the rationalism that they themselves have been a perpetrator of. This hypocritical critique must then stem from something else, likely, a fear of the soft power China.  ",
    image: "/images/environmental_advocate_hypocrite.jpg"
  });

  // Load content based on section
  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/data/${section.toLowerCase()}.json`);
        if (response.ok) {
          const data = await response.json();
          setContent(data);
        } else {
          console.error('File not found');
        }
      } catch (error) {
        console.error('Error loading content:', error);
      }
    };

    loadContent();
  }, [section]);

  return (
    <div className="template-container">
      <div>
        <h1 className="title">{content.intro}</h1>
        <div className="imagewarpper">
          <img src={content.image} alt="section related" />
          <p className='referencetext'>{content.ref}</p>
        </div>
        <div className="arguments">
          <div className="for">
            <p>{content.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NaysayerTemplate;
