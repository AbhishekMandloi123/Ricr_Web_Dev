import React from "react";

const StudentLogin = () => {
  const [fullname, setFullname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [dob, setDob] = React.useState("");

  const [qualification, setQualification] = React.useState("");
  const [grade, setGrade] = React.useState("");

  const [course, setCourse] = React.useState("");
  const [batch, setBatch] = React.useState("");

  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [pin, setPin] = React.useState("");

  const [gname, setGname] = React.useState("");
  const [gc, setGc] = React.useState("");

  const [source, setSource] = React.useState("");
  const [special, setSpecial] = React.useState("");

  const [isLoading, setIsLoading] = React.useState(false);

  const handleClear = () => {
    setFullname("");
    setEmail("");
    setMobile("");
    setDob("");
    setQualification("");
    setGrade("");
    setCourse("");
    setBatch("");
    setAddress("");
    setCity("");
    setPin("");
    setGname("");
    setGc("");
    setSource("");
    setSpecial("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const data = {
        fullname,
        email,
        mobile,
        dob,
        qualification,
        grade,
        course,
        batch,
        address,
        city,
        pin,
        gname,
        gc,
        source,
        special,
      };

      console.log("Student Data:", data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }

    handleClear();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-indigo-700">
        Student Registration Form
      </h1>

      <form
        onSubmit={handleSubmit}
        onReset={handleClear}
        className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow space-y-6"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
            className="input"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input"
          />
          <input
            type="number"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
            className="input"
          />
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
            className="input"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <select
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
            required
            className="input"
          >
            <option value="" disabled>
              -- Select Qualification --
            </option>
            <option value="10th">10th</option>
            <option value="12th">12th</option>
            <option value="Graduate">Graduate</option>
            <option value="Postgraduate">Postgraduate</option>
          </select>

          <input
            type="text"
            placeholder="Percentage / Grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
            className="input"
          >
            <option value="" disabled>
              -- Select Course --
            </option>
            <option>IIT-JEE</option>
            <option>NEET</option>
            <option>Banking</option>
            <option>UPSC</option>
          </select>

          <select
            value={batch}
            onChange={(e) => setBatch(e.target.value)}
            required
            className="input"
          >
            <option value="" disabled>
              -- Select Batch --
            </option>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
          </select>
        </div>

        <textarea
          placeholder="Residential Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          className="input"
        />

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            className="input"
          />
          <input
            type="number"
            placeholder="Pincode"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            required
            className="input"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Guardian Name"
            value={gname}
            onChange={(e) => setGname(e.target.value)}
            required
            className="input"
          />
          <input
            type="number"
            placeholder="Guardian Contact"
            value={gc}
            onChange={(e) => setGc(e.target.value)}
            required
            className="input"
          />
        </div>

        {/* Extra */}
        <select
          value={source}
          onChange={(e) => setSource(e.target.value)}
          required
          className="input"
        >
          <option value="" disabled>
            How did you hear about us?
          </option>
          <option>Friends</option>
          <option>Online Ads</option>
          <option>Newspaper</option>
          <option>Social Media</option>
        </select>

        <input
          type="text"
          placeholder="Special Requirements (optional)"
          value={special}
          onChange={(e) => setSpecial(e.target.value)}
          className="input"
        />

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            type="reset"
            className="px-6 py-2 bg-red-500 text-white rounded"
          >
            Clear
          </button>

          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded"
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentLogin;
