import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Home from '@/views/Home';
import Mark from '@/views/Mark';
import Upload from '@/views/Upload';
import Edit from '@/views/Edit';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <Header />
        <main className="w-full flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mark" element={<Mark />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <footer>
          {/* Footer content if any */}
        </footer>
      </div>
    </Router>
  );
}

export default App;
