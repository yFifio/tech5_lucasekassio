import { useState } from "react";
import { Pencil, Save } from "lucide-react";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: "Bruno Silva",
    email: "bruno@gmail.com",
    avatar: "https://i.pravatar.cc/150?img=3",
  });

  const handleEdit = () => setIsEditing(!isEditing);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
        padding: "1rem",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          padding: "1.5rem",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={user.avatar}
            alt="Profile"
            style={{
              width: "96px",
              height: "96px",
              borderRadius: "50%",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          />
          {isEditing ? (
            <div style={{ width: "100%", marginTop: "1rem" }}>
              <input
                style={{
                  width: "100%",
                  marginBottom: "0.5rem",
                  padding: "0.5rem",
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                }}
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
              <input
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                }}
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
          ) : (
            <div style={{ textAlign: "center", marginTop: "1rem" }}>
              <h2 style={{ fontSize: "1.25rem", fontWeight: "600" }}>
                {user.name}
              </h2>
              <p style={{ color: "#4b5563" }}>{user.email}</p>
            </div>
          )}

          <button
            style={{
              marginTop: "1rem",
              width: "100%",
              padding: "0.5rem",
              backgroundColor: "#3b82f6",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
            onClick={handleEdit}
          >
            {isEditing ? (
              <Save style={{ marginRight: "0.5rem" }} size={16} />
            ) : (
              <Pencil style={{ marginRight: "0.5rem" }} size={16} />
            )}
            {isEditing ? "Salvar" : "Editar Perfil"}
          </button>
        </div>
      </div>
    </div>
  );
}
