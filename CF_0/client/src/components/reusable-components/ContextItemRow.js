import axios from "axios";
import FormData from "form-data";

const ContextItemRow = ({
  data,
  setShowDialogFor,
  setCurrentData,
  setRemoveDialogForData,
  setShowValueDialogForData,
  signatured_file,
  dataStorage,
}) => {
  const handleChange = async (e) => {
    const form = new FormData();
    form.append("title", e.target.files[0].name);
    form.append("file", e.target.files[0]);
    try {
      const res = await axios.post("http://localhost:9003/upload", form);
      for (let i in dataStorage) {
        var entity = dataStorage[i];
        if (Object.keys(entity)[0] === Object.keys(data)[0]) {
          const obj = {};
          obj[`${Object.keys(entity)[0]}`] = res.data.path;
          dataStorage[i] = obj;
        }
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div className="list">
      <div className="list-item">{Object.keys(data)[0]}</div>
      <div>
        <button
          onClick={() => {
            setShowDialogFor(true);
            setCurrentData(Object.keys(data)[0]);
          }}
        >
          C
        </button>
        <button
          onClick={() => {
            setRemoveDialogForData(true);
            setCurrentData(Object.keys(data)[0]);
          }}
        >
          D
        </button>
        {signatured_file ? (
          <>
            <input type="file" onChange={handleChange} />
          </>
        ) : (
          <button
            onClick={() => {
              setShowValueDialogForData(true);
              setCurrentData(data);
            }}
          >
            V
          </button>
        )}
      </div>
    </div>
  );
};

export default ContextItemRow;
