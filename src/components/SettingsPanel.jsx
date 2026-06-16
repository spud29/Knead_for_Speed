import React, { useState } from 'react';
import { useGameState, useDispatch } from '../state/GameContext.jsx';
import { exportSave, importSave, deleteSave } from '../engine/saveManager.js';
import AuthButton from './AuthButton.jsx';
import { firebaseEnabled } from '../engine/firebase.js';

export default function SettingsPanel() {
  const state = useGameState();
  const dispatch = useDispatch();
  const [importText, setImportText] = useState('');
  const [importStatus, setImportStatus] = useState(null);
  const [deleteArmed, setDeleteArmed] = useState(false);

  function handleExport() {
    const str = exportSave(state);
    if (navigator.clipboard) {
      navigator.clipboard.writeText(str).then(() => {
        dispatch({ type: 'SET_TOAST', toast: { key: Date.now(), text: 'Save copied to clipboard!' } });
      }).catch(() => {
        setImportText(str);
      });
    } else {
      setImportText(str);
    }
  }

  function handleImport() {
    try {
      const data = importSave(importText.trim());
      dispatch({ type: 'IMPORT_SAVE', payload: data });
      setImportStatus('success');
      setImportText('');
      dispatch({ type: 'SET_TOAST', toast: { key: Date.now(), text: 'Save imported!' } });
    } catch {
      setImportStatus('error');
    }
    setTimeout(() => setImportStatus(null), 3000);
  }

  function handleDelete() {
    if (!deleteArmed) {
      setDeleteArmed(true);
      setTimeout(() => setDeleteArmed(false), 4000);
      return;
    }
    deleteSave();
    dispatch({ type: 'RESET' });
    setDeleteArmed(false);
  }

  return (
    <div style={{ width: '100%', maxWidth: 360 }}>
      <div className="section-header" style={{ marginTop: 0 }}>SOUND</div>

      <div className="setting-row">
        <span style={{ fontSize: '0.8rem' }}>SFX Volume</span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={state.settings.sfxVol}
          onChange={e => dispatch({ type: 'UPDATE_SETTING', key: 'sfxVol', value: parseFloat(e.target.value) })}
          className="setting-slider"
        />
      </div>

      <div className="setting-row">
        <span style={{ fontSize: '0.8rem' }}>Music Volume</span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={state.settings.musicVol}
          onChange={e => dispatch({ type: 'UPDATE_SETTING', key: 'musicVol', value: parseFloat(e.target.value) })}
          className="setting-slider"
        />
      </div>

      <div className="section-header">DISPLAY</div>

      <div className="setting-row">
        <span style={{ fontSize: '0.8rem' }}>Number Format</span>
        <div style={{ display: 'flex', gap: 4 }}>
          {['letter', 'scientific', 'engineering'].map(opt => (
            <button
              key={opt}
              onClick={() => dispatch({ type: 'UPDATE_SETTING', key: 'notation', value: opt })}
              className="btn"
              style={{
                fontSize: '0.65rem',
                padding: '4px 8px',
                background: state.settings.notation === opt ? 'var(--ember)' : undefined,
                color: state.settings.notation === opt ? 'white' : undefined,
              }}
            >
              {opt === 'letter' ? 'K/M/B' : opt === 'scientific' ? 'Sci' : 'Eng'}
            </button>
          ))}
        </div>
      </div>

      {firebaseEnabled && (
        <>
          <div className="section-header">CLOUD SAVE</div>
          <div style={{ marginTop: 8 }}>
            <AuthButton />
          </div>
        </>
      )}

      <div className="section-header">SAVE DATA</div>

      <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
        <button onClick={handleExport} className="btn" style={{ flex: 1 }}>
          Export Save
        </button>
      </div>

      <div style={{ marginTop: 12 }}>
        <textarea
          value={importText}
          onChange={e => setImportText(e.target.value)}
          placeholder="Paste save code here..."
          style={{
            width: '100%',
            height: 60,
            background: 'var(--surface-2)',
            color: 'var(--text)',
            border: '1px dashed var(--muted)',
            borderRadius: 6,
            padding: 8,
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.65rem',
            resize: 'none',
          }}
        />
        <button
          onClick={handleImport}
          disabled={!importText.trim()}
          className="btn"
          style={{ marginTop: 6, width: '100%', opacity: importText.trim() ? 1 : 0.4 }}
        >
          {importStatus === 'success' ? 'Imported!' : importStatus === 'error' ? 'Invalid save code' : 'Import Save'}
        </button>
      </div>

      <div style={{ marginTop: 20 }}>
        <button onClick={handleDelete} className="btn btn-danger" style={{ width: '100%' }}>
          {deleteArmed ? 'Tap again to delete forever' : 'Delete All Save Data'}
        </button>
      </div>

      <div className="muted-text font-ticket" style={{ fontSize: '0.55rem', textAlign: 'center', marginTop: 20, opacity: 0.5 }}>
        Knead for Speed v2.0
      </div>
    </div>
  );
}
