function Declaration(lang) {
  const langValue = typeof lang === "string" ? lang : lang?.lang;

  return (
    <div>
      <img
        src={langValue === "th" ? "/images/declareTH.jpg" : "/images/Dec.jpg"}
        alt="ODOS_Timeline"
      />
    </div>
  );
}

export default Declaration;
