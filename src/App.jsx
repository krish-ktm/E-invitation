
export const App = () => {
  return (
    <>

      <CardCompo />
      <CardCompo />
      <CardCompo />
      <CardCompo />

    </>
  )
};


const CardCompo = () => {

  const name = "Jemmy Patel";
  const subTxt = "Papqnclk ns;alfknvskdvljn";

  const ParaFunc = () => {
    const para = "oaslkjfaolknv l;jsbnlvidskbvnlkj.bjnasiluvbkn lkjaniwfvbuen il;l";
    return para
  };

  return (
    <div>

      <h2>{name}</h2>

      <h3>{subTxt}</h3>

      <p>{ParaFunc()}</p>


    </div>

  )
}