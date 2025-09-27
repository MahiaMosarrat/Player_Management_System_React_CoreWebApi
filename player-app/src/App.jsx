// // import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// // import { useState } from 'react';

// // import './App.css';
// // import PlayerForm from './components/PlayerForm';
// // import { PlayerList } from './components/PlayerList';
// // import Footer from './components/footer';
// // import Home from './components/Home'; // We'll update this component to include the hero section content

// // import 'bootstrap/dist/css/bootstrap.min.css';

// // import { Container, Nav, Navbar } from 'react-bootstrap';
// // import ManagerForm from './components/ManagerForm';
// // import ManagerList from './components/ManagerList';

// // function App() {
// //   const [playerToEdit, setPlayerToEdit] = useState(null);

// //   const handleEditPlayer = (player) => {
// //     setPlayerToEdit(player);
// //   };

// //   return (
// //     <Router>
// //       <div className="d-flex flex-column min-vh-100">
// //         <Navbar bg="dark" variant="dark" expand="lg">
// //           <Container>
// //             <Navbar.Brand href="/">Player Management System</Navbar.Brand>
// //             <Navbar.Toggle aria-controls="basic-navbar-nav" />
// //             <Navbar.Collapse id="basic-navbar-nav">
// //               <Nav className="me-auto">
// //                 <Nav.Link href="/">Home</Nav.Link>
// //                 <Nav.Link href="/players">Players</Nav.Link>
// //                 <Nav.Link href="/add-player">Add Player</Nav.Link>
// //                 <Nav.Link href="/managers">Managers</Nav.Link>
// //                 <Nav.Link href="/managers/create">Add Manager</Nav.Link>
// //               </Nav>
// //             </Navbar.Collapse>
// //           </Container>
// //         </Navbar>

// //         <Container className="mt-4 flex-grow-1">
// //           <Routes>
// //             <Route path="/" element={<Home />} />
// //             <Route path="/players" element={<PlayerList onEdit={handleEditPlayer} onAddCandidate={() => setPlayerToEdit(null)} />} />
// //             <Route path="/add-player" element={<PlayerForm player={playerToEdit} onCancel={() => setPlayerToEdit(null)} onSave={() => setPlayerToEdit(null)} />} />
// //             <Route path="/managers" element={<ManagerList />} />
// //             <Route path="/managers/create" element={<ManagerForm />} />
// //             <Route path="/managers/edit/:id" element={<ManagerForm />} />
// //             <Route path="*" element={<Navigate to="/" replace />} />
// //           </Routes>
// //         </Container>

// //         <Footer />
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;

// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { useState } from 'react';

// import './App.css';
// import PlayerForm from './components/PlayerForm';
// import { PlayerList } from './components/PlayerList';
// import Footer from './components/footer';
// import Home from './components/Home';
// import ManagerForm from './components/ManagerForm';
// import ManagerList from './components/ManagerList';
// import MatchList from './components/MatchList';
// import MatchForm from './components/MatchForm';
// import PlayerEvaluationList from './components/PlayerEvaluationList';
// import PlayerEvaluationForm from './components/PlayerEvaluationForm';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Nav, Navbar } from 'react-bootstrap';
// import TrainerList from './components/TrainerList';
// import TrainerForm from './components/TrainerForm';


// function App() {
//   const [playerToEdit, setPlayerToEdit] = useState(null);
//   const [managerToEdit, setManagerToEdit] = useState(null);
//   const [trainerToEdit, setTrainerToEdit] = useState(null);
//   const [matchToEdit, setMatchToEdit] = useState(null);
//   const [playerEvaluationToEdit, setPlayerEvaluationToEdit] = useState(null);

//   const handleEditPlayer = (player) => { setPlayerToEdit(player);};
//   const handleEditManager = (manager) => { setManagerToEdit(manager);};
//   const handleEditTrainer = (trainer) => setTrainerToEdit(trainer);
//   const handleEditMatch = (match) => setMatchToEdit(match);
//   const handleEditPlayerEvaluation = (playerEvaluation) => {setPlayerEvaluationToEdit(playerEvaluation);};

//   return (
//     <Router>
//       <div className="d-flex flex-column min-vh-100">
//         <Navbar bg="dark" variant="dark" expand="lg">
//           <Container>
//             <Navbar.Brand href="/">Player Management System</Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//               <Nav className="me-auto">
//                 <Nav.Link href="/">Home</Nav.Link>

//                 <Nav.Link href="/players">Players</Nav.Link>
//                 <Nav.Link href="/add-player">Add Player</Nav.Link>

//                 <Nav.Link href="/managers">Managers</Nav.Link>
//                 <Nav.Link href="/managers/create">Add Manager</Nav.Link>
              
//                 <Nav.Link href="/trainers">Trainers</Nav.Link>
//                 <Nav.Link href="/add-trainer">Add Trainer</Nav.Link>
              
//                 <Nav.Link href="/matches">Matches</Nav.Link>
//                 <Nav.Link href="/add-match">Add Match</Nav.Link>

//                 <Nav.Link href="/playerEvaluations">Evaluations</Nav.Link>
//                 <Nav.Link href="/add-playerEvaluation">Add Evaluation</Nav.Link>
//               </Nav>
//             </Navbar.Collapse>
//           </Container>
//         </Navbar>

//         <Container className="mt-4 flex-grow-1">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/players" element={<PlayerList onEdit={handleEditPlayer} onAddCandidate={() => setPlayerToEdit(null)} />} />
//             <Route path="/add-player" element={<PlayerForm player={playerToEdit} onCancel={() => setPlayerToEdit(null)} onSave={() => setPlayerToEdit(null)} />} />

//             <Route path="/managers" element={<ManagerList onEdit={handleEditManager} onAddManager={() => setManagerToEdit(null)} />} />
//             <Route path="/managers/create" element={<ManagerForm manager={managerToEdit} onCancel={() => setManagerToEdit(null)} onSave={() => setManagerToEdit(null)} />} />

//           {/* Trainer Routes */}
//             <Route
//               path="/trainers"
//               element={<TrainerList onEdit={handleEditTrainer} onAddTrainer={() => setTrainerToEdit(null)} />}
//             />
//             <Route
//               path="/add-trainer"
//               element={<TrainerForm trainer={trainerToEdit} onCancel={() => setTrainerToEdit(null)} onSave={() => setTrainerToEdit(null)} />}
//             />

//             {/* Match Routes */}
//             <Route
//               path="/matches"
//               element={<MatchList onEdit={handleEditMatch} onAddMatch={() => setMatchToEdit(null)} />}
//             />
//             <Route
//               path="/add-match"
//               element={<MatchForm match={matchToEdit} onCancel={() => setMatchToEdit(null)} onSave={() => setMatchToEdit(null)} />}
//             />

//             <Route path="/playerEvaluations" element={<PlayerEvaluationList onEdit={handleEditPlayerEvaluation} onAddPlayerEvaluation={() => setPlayerEvaluationToEdit(null)} />} />
//             <Route path="/add-playerEvaluation" element={<PlayerEvaluationForm playerEvaluation={playerEvaluationToEdit} onCancel={() => setPlayerEvaluationToEdit(null)} onSave={() => setPlayerEvaluationToEdit(null)} />} />

//             <Route path="*" element={<Navigate to="/" replace />} />
//           </Routes>
//         </Container>

//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { FaUserPlus, FaUserTie, FaChalkboardTeacher, FaFutbol, FaClipboardList } from "react-icons/fa";

import './App.css';
import PlayerForm from './components/PlayerForm';
import { PlayerList } from './components/PlayerList';
import Footer from './components/footer';
import Home from './components/Home';
import ManagerForm from './components/ManagerForm';
import ManagerList from './components/ManagerList';
import MatchList from './components/MatchList';
import MatchForm from './components/MatchForm';
import PlayerEvaluationList from './components/PlayerEvaluationList';
import PlayerEvaluationForm from './components/PlayerEvaluationForm';
import TrainerList from './components/TrainerList';
import TrainerForm from './components/TrainerForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import PlayerEvaluationSummary from './components/PlayerEvaluationSummary';

function App() {
  const [playerToEdit, setPlayerToEdit] = useState(null);
  const [managerToEdit, setManagerToEdit] = useState(null);
  const [trainerToEdit, setTrainerToEdit] = useState(null);
  const [matchToEdit, setMatchToEdit] = useState(null);
  const [playerEvaluationToEdit, setPlayerEvaluationToEdit] = useState(null);

  const handleEditPlayer = (player) => setPlayerToEdit(player);
  const handleEditManager = (manager) => setManagerToEdit(manager);
  const handleEditTrainer = (trainer) => setTrainerToEdit(trainer);
  const handleEditMatch = (match) => setMatchToEdit(match);
  const handleEditPlayerEvaluation = (pe) => setPlayerEvaluationToEdit(pe);

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/">Player Management</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/players">Player</Nav.Link>
                <Nav.Link href="/managers">Manager</Nav.Link>
                <Nav.Link href="/trainers">Trainer</Nav.Link>
                <Nav.Link href="/matches">Match</Nav.Link>
                <Nav.Link href="/playerEvaluations">Evaluation</Nav.Link>
              </Nav>

              {/* Right-aligned Create Dropdown */}
              <Nav className="ms-auto">
                <NavDropdown title="Create" id="create-dropdown" className="ms-auto">
  <NavDropdown.Item href="/add-player">
    <FaUserPlus className="me-2" /> Create Player
  </NavDropdown.Item>
  <NavDropdown.Item href="/managers/create">
    <FaUserTie className="me-2" /> Create Manager
  </NavDropdown.Item>
  <NavDropdown.Item href="/add-trainer">
    <FaChalkboardTeacher className="me-2" /> Create Trainer
  </NavDropdown.Item>
  <NavDropdown.Item href="/add-match">
    <FaFutbol className="me-2" /> Create Match
  </NavDropdown.Item>
  <NavDropdown.Item href="/add-playerEvaluation">
    <FaClipboardList className="me-2" /> Create Evaluation
  </NavDropdown.Item>
</NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container className="mt-4 flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/players" element={<PlayerList onEdit={handleEditPlayer} onAddCandidate={() => setPlayerToEdit(null)} />} />
            <Route path="/add-player" element={<PlayerForm player={playerToEdit} onCancel={() => setPlayerToEdit(null)} onSave={() => setPlayerToEdit(null)} />} />

            <Route path="/managers" element={<ManagerList onEdit={handleEditManager} onAddManager={() => setManagerToEdit(null)} />} />
            <Route path="/managers/create" element={<ManagerForm manager={managerToEdit} onCancel={() => setManagerToEdit(null)} onSave={() => setManagerToEdit(null)} />} />

            <Route path="/trainers" element={<TrainerList onEdit={handleEditTrainer} onAddTrainer={() => setTrainerToEdit(null)} />} />
            <Route path="/add-trainer" element={<TrainerForm trainer={trainerToEdit} onCancel={() => setTrainerToEdit(null)} onSave={() => setTrainerToEdit(null)} />} />

            <Route path="/matches" element={<MatchList onEdit={handleEditMatch} onAddMatch={() => setMatchToEdit(null)} />} />
            <Route path="/add-match" element={<MatchForm match={matchToEdit} onCancel={() => setMatchToEdit(null)} onSave={() => setMatchToEdit(null)} />} />

            <Route path="/playerEvaluations" element={<PlayerEvaluationList onEdit={handleEditPlayerEvaluation} onAddPlayerEvaluation={() => setPlayerEvaluationToEdit(null)} />} />
            <Route path="/add-playerEvaluation" element={<PlayerEvaluationForm playerEvaluation={playerEvaluationToEdit} onCancel={() => setPlayerEvaluationToEdit(null)} onSave={() => setPlayerEvaluationToEdit(null)} />} />

            <Route path="/playerEvaluations/:playerEvaluationId" element={<PlayerEvaluationSummary />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Container>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

