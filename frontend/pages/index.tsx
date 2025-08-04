import { useState } from 'react';

export default function Home() {
  const [idea, setIdea] = useState('');
  const [sections, setSections] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await fetch('http://localhost:3001/sections', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idea }),
      });

      const res = await fetch('http://localhost:3001/sections');
      const data = await res.json();
      if (data.length > 0) {
        setSections(data[0].sections);
      }
    } catch (err) {
      setError('Something went wrong.');
    }
    setLoading(false);
  };

  return (
    <main style={{ padding: 40 }}>
      <h1>Vibe Site Generator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="Enter website idea"
        />
        <button type="submit">Generate</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {sections.length > 0 && (
        <div>
          <h2>Preview</h2>
          <ul>
            {sections.map((sec, idx) => (
              <li key={idx}>{sec}</li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}