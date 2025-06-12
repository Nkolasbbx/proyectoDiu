import React, { useState } from 'react';

const MiPerfil = () => {
  // Datos del usuario que puedes modificar manualmente
  const [userData, setUserData] = useState({
    name: "Juan Pérez",
    email: "juan.perez@uusm.cl",
    phone: "+56 9 1234 5678",
    address: "Av. Principal 123, Santiago",
    birthDate: "21-01-2003",
    studentId: "202173539-4",
    career: "Ingeniería Civil En Informática"
  });

  const [editMode, setEditMode] = useState(false);
  const [tempData, setTempData] = useState({...userData});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setUserData({...tempData});
    setEditMode(false);
  };

  const handleCancel = () => {
    setTempData({...userData});
    setEditMode(false);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Mi Perfil</h1>
      
      <div style={styles.profileCard}>
        {editMode ? (
          <div style={styles.editForm}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Nombre:</label>
              <input
                type="text"
                name="name"
                value={tempData.name}
                onChange={handleInputChange}
                style={styles.input}
              />
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>Email:</label>
              <input
                type="email"
                name="email"
                value={tempData.email}
                onChange={handleInputChange}
                style={styles.input}
              />
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>Teléfono:</label>
              <input
                type="tel"
                name="phone"
                value={tempData.phone}
                onChange={handleInputChange}
                style={styles.input}
              />
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>Dirección:</label>
              <input
                type="text"
                name="address"
                value={tempData.address}
                onChange={handleInputChange}
                style={styles.input}
              />
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>Fecha Nacimiento:</label>
              <input
                type="date"
                name="birthDate"
                value={tempData.birthDate}
                onChange={handleInputChange}
                style={styles.input}
              />
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>Matrícula:</label>
              <input
                type="text"
                name="studentId"
                value={tempData.studentId}
                onChange={handleInputChange}
                style={styles.input}
              />
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>Carrera:</label>
              <input
                type="text"
                name="career"
                value={tempData.career}
                onChange={handleInputChange}
                style={styles.input}
              />
            </div>
            
            <div style={styles.buttonGroup}>
              <button 
                onClick={handleCancel}
                style={{...styles.button, ...styles.cancelButton}}
              >
                Cancelar
              </button>
              <button 
                onClick={handleSave}
                style={{...styles.button, ...styles.saveButton}}
              >
                Guardar
              </button>
            </div>
          </div>
        ) : (
          <div style={styles.viewMode}>
            <div style={styles.profileHeader}>
              <h2 style={styles.userName}>{userData.name}</h2>
              <button 
                onClick={() => setEditMode(true)}
                style={{...styles.button, ...styles.editButton}}
              >
                Editar
              </button>
            </div>
            
            <div style={styles.infoSection}>
              <h3 style={styles.sectionTitle}>Información Personal</h3>
              <div style={styles.infoGrid}>
                <div style={styles.infoItem}>
                  <span style={styles.infoLabel}>Email:</span>
                  <span style={styles.infoValue}>{userData.email}</span>
                </div>
                <div style={styles.infoItem}>
                  <span style={styles.infoLabel}>Teléfono:</span>
                  <span style={styles.infoValue}>{userData.phone}</span>
                </div>
                <div style={styles.infoItem}>
                  <span style={styles.infoLabel}>Dirección:</span>
                  <span style={styles.infoValue}>{userData.address}</span>
                </div>
                <div style={styles.infoItem}>
                  <span style={styles.infoLabel}>Fecha Nacimiento:</span>
                  <span style={styles.infoValue}>{userData.birthDate}</span>
                </div>
              </div>
            </div>
            
            <div style={styles.infoSection}>
              <h3 style={styles.sectionTitle}>Información Académica</h3>
              <div style={styles.infoGrid}>
                <div style={styles.infoItem}>
                  <span style={styles.infoLabel}>Matrícula:</span>
                  <span style={styles.infoValue}>{userData.studentId}</span>
                </div>
                <div style={styles.infoItem}>
                  <span style={styles.infoLabel}>Carrera:</span>
                  <span style={styles.infoValue}>{userData.career}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Estilos en objeto JavaScript (puedes moverlos a un archivo CSS separado si prefieres)
const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  title: {
    color: '#333',
    textAlign: 'center',
    marginBottom: '30px'
  },
  profileCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    padding: '25px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  profileHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    borderBottom: '1px solid #eee',
    paddingBottom: '15px'
  },
  userName: {
    color: '#444',
    margin: 0
  },
  infoSection: {
    marginBottom: '25px'
  },
  sectionTitle: {
    color: '#555',
    borderBottom: '1px solid #ddd',
    paddingBottom: '8px',
    marginBottom: '15px'
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '15px'
  },
  infoItem: {
    marginBottom: '10px'
  },
  infoLabel: {
    fontWeight: 'bold',
    display: 'inline-block',
    minWidth: '120px',
    color: '#666'
  },
  infoValue: {
    color: '#333'
  },
  editForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  formGroup: {
    marginBottom: '15px'
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#555'
  },
  input: {
    width: '100%',
    padding: '8px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '16px'
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '10px',
    marginTop: '20px'
  },
  button: {
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '14px'
  },
  editButton: {
    backgroundColor: '#4CAF50',
    color: 'white'
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    color: 'white'
  },
  cancelButton: {
    backgroundColor: '#f44336',
    color: 'white'
  }
};

export default MiPerfil;