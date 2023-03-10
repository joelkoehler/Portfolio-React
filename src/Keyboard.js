// import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
// import 'react-piano/dist/styles.css';

// export default function Keyboard() {
//     const firstNote = MidiNumbers.fromNote('c3');
//     const lastNote = MidiNumbers.fromNote('c4');
//     const keyboardShortcuts = KeyboardShortcuts.create({
//       firstNote: firstNote,
//       lastNote: lastNote,
//       keyboardConfig: KeyboardShortcuts.HOME_ROW,
//     });
   
//     return (
//       <Piano
//         noteRange={{ first: firstNote, last: lastNote }}
//         playNote={(midiNumber) => {
//           // Play a given note - see notes below
//         }}
//         stopNote={(midiNumber) => {
//           // Stop playing a given note - see notes below
//         }}
//         width={1000}
//         keyboardShortcuts={keyboardShortcuts}
//       />
//     );
//   }



import React from 'react';
import ReactDOM from 'react-dom';
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';

import DimensionsProvider from './DimensionsProvider';
import SoundfontProvider from './SoundfontProvider';

// webkitAudioContext fallback needed to support Safari
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';

const noteRange = {
  first: MidiNumbers.fromNote('c3'),
  last: MidiNumbers.fromNote('c4'),
};
const keyboardShortcuts = KeyboardShortcuts.create({
  firstNote: noteRange.first,
  lastNote: noteRange.last,
  keyboardConfig: KeyboardShortcuts.HOME_ROW,
});

export default function Keyboard(props) {
  return (
    <DimensionsProvider>
      {({ containerWidth, containerHeight }) => (
        <SoundfontProvider
          instrumentName="acoustic_grand_piano"
          audioContext={audioContext}
          hostname={soundfontHostname}
          render={({ isLoading, playNote, stopNote }) => (
            <Piano
              noteRange={noteRange}
              width={containerWidth}
              playNote={playNote}
              stopNote={stopNote}
              disabled={isLoading}
              keyboardShortcuts={keyboardShortcuts}
              {...props}
            />
          )}
        />
      )}
    </DimensionsProvider>
  );
}
