import { Button, Stack } from "@mui/material";
import { InputController } from "./InputController";

export const Step1 = () => {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
       <section>

<div className="container-fluid">
  <div className="form-heading">
    <h4>Academic year : 2023-2024</h4>
    <h6>
      Admission form for first/direct second year - B.tech (engineering)
    </h6>
  </div>

  <div className="container">
    <div className="row">


      <div className="form-left-container col-md-8">
        <div className="branch">
         
            <label htmlFor="branch">Branch : </label>
            <div className="checkbox-container">
            <select id="branch" name="selectedBranch" className="form-control">
              <option value="">Select Branch</option>.
              <option value="CSE">CSE</option>.
              <option value="Civil">Civil</option>.
              <option value="Electrical">Electrical</option>.
              <option value="E & TC">E & TC</option>.
              <option value="MECH">MECH</option>.
            </select>
           
          </div>
        </div>

        <div className="input-wrapper">
          <label className="form-label">Student's Full Name : </label>

          <div className="input-container">

            <input
              type="text"
              name="studName"
              className="form-control"
            />
           
          </div>

        </div>

        <div className="input-wrapper">
          <label className="form-label">Date of Birth : </label>

          <div className="input-container">
            <input
              type="date"
              className={`form-control ${errors.studDob && "invalid"
                }`}
              {...register("studDob", {
                required: "Date of Birth is required",

              })}
              onKeyUp={() => {
                trigger("studDob");
              }}
            />
            {errors.studDob && (
              <small className="text-danger">
                {errors.studDob.message}
              </small>
            )}
          </div>
        </div>

        <div className="input-wrapper">
          <label>Gender : </label>
          <div className="gender-container">
            <label className="mr-5">Male</label>
            <input
              {...register('studGender', { required: "Gender is required" })}
              className={`form-check-input ${errors.studGender && "invalid"
                }`}
              type="radio"
              value="male"
              id="field-male"
            />

          </div>

          <div className="gender-container1">
            <label className="mr-5">Female</label>
            <input
              {...register('studGender', { required: "Gender is required" })}
              className={`form-check-input ${errors.studGender && "invalid"
                }`}
              type="radio"
              value="female"
              id="field-male"
            />

          </div>
          {errors.studGender && (
            <small className="text-danger">
              {errors.studGender.message}
            </small>
          )}
        </div>

        <div className="input-wrapper">
          <label className="form-label">Adhar Card No : </label>

          <div className="input-container">
            <input
              type="number"
              className={`form-control ${errors.studAdhar && "invalid"
                }`}
              {...register("studAdhar", {
                required: "Adhar card number is required",
                pattern: {
                  value:
                    /(^[0-9]{4}[0-9]{4}[0-9]{4}$)|(^[0-9]{4}\s[0-9]{4}\s[0-9]{4}$)|(^[0-9]{4}-[0-9]{4}-[0-9]{4}$)/,
                  message: "Invalid AdharCard Number",
                },
              })}
              onKeyUp={() => {
                trigger("studAdhar");
              }}
            />
            {errors.studAdhar && (
              <small className="text-danger">
                {errors.studAdhar.message}
              </small>
            )}
          </div>
        </div>

        <div className="input-wrapper float-left">
          <label className="form-label">Contact No.(Student) : </label>

          <div className="input-container">
            <input
              type="number"
              className={`form-control ${errors.studContact && "invalid"
                }`}
              {...register("studContact", {
                required: "Phone is Required",
                pattern: {
                  value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                  max: 10,
                  min: 10,
                  message: "Invalid phone no",
                },
              })}
              onKeyUp={() => {
                trigger("studContact");
              }}
            />
            {errors.studContact && (
              <small className="text-danger">
                {errors.studContact.message}
              </small>
            )}
          </div>
        </div>

        <div className="input-wrapper float-left">
          <label className="form-label">Contact No.(Parent) : </label>

          <div className="input-container">
            <input
              type="text"
              className={`form-control ${errors.parentContact && "invalid"}`}
              {...register("parentContact", {
                required: "Phone is Required",
                pattern: {
                  value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                  message: "Invalid phone no",
                },
              })}
              onKeyUp={() => {
                trigger("parentContact");
              }}
            />
            {errors.parentContact && (
              <small className="text-danger">{errors.parentContact.message}</small>
            )}
          </div>
        </div>

        <div className="input-wrapper float-left">
          <label className="form-label">Email Id : </label>

          <div className="input-container">
            <input
              type="email"
              className={`form-control ${errors.studEmail && "invalid"
                }`}
              {...register("studEmail", {
                required: "Email is Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              onKeyUp={() => {
                trigger("studEmail");
              }}
            />
            {errors.studEmail && (
              <small className="text-danger">
                {errors.studEmail.message}
              </small>
            )}
          </div>
        </div>

        <div className="input-wrapper float-left">
          <label className="form-label">Nationality : </label>

          <div className="input-container">
            <input
              type="text"
              className={`form-control ${errors.studNationality && "invalid"
                }`}
              {...register("studNationality", {
                required: "Nationality is Required",

              })}
              onKeyUp={() => {
                trigger("studNationality");
              }}
            />
            {errors.studNationality && (
              <small className="text-danger">
                {errors.studNationality.message}
              </small>
            )}
          </div>
        </div>

        <div className="input-wrapper float-left">
          <label className="form-label">Blood Group : </label>

          <div className="input-container">
            <input
              type="text"
              className={`form-control ${errors.studBloodGroup && "invalid"
                }`}
              {...register("studBloodGroup", {
                required: "Student Blood group is required",

              })}
              onKeyUp={() => {
                trigger("studBloodGroup");
              }}
            />
            {errors.studBloodGroup && (
              <small className="text-danger">
                {errors.studBloodGroup.message}
              </small>
            )}
          </div>
        </div>

        <div className="input-wrapper float-left">
          <label className="form-label">Father's Name : </label>

          <div className="input-container">
            <input
              type="text"
              className={`form-control ${errors.studFatherName && "invalid"
                }`}
              {...register("studFatherName", {
                required: "Student Father's name is required",

              })}
              onKeyUp={() => {
                trigger("studFatherName");
              }}
            />
            {errors.studFatherName && (
              <small className="text-danger">
                {errors.studFatherName.message}
              </small>
            )}
          </div>
        </div>

        <div className="input-wrapper float-left">
          <label className="form-label">Father's Occupation : </label>

          <div className="input-container">
            <input
              type="text"
              className={`form-control ${errors.studFatherOccupation && "invalid"
                }`}
              {...register("studFatherOccupation", {
                required: "Student Father's Occupation is required",

              })}
              onKeyUp={() => {
                trigger("studFatherOccupation");
              }}
            />
            {errors.studFatherOccupation && (
              <small className="text-danger">
                {errors.studFatherOccupation.message}
              </small>
            )}
          </div>
        </div>

        <div className="input-wrapper float-left">
          <label className="form-label">Mother's Name : </label>

          <div className="input-container">
            <input
              type="text"
              className={`form-control ${errors.studMotherName && "invalid"
                }`}
              {...register("studMotherName", {
                required: "Student Mother's name is required",

              })}
              onKeyUp={() => {
                trigger("studMotherName");
              }}
            />
            {errors.studMotherName && (
              <small className="text-danger">
                {errors.studMotherName.message}
              </small>
            )}
          </div>
        </div>

        <div className="branch">
         
         <label htmlFor="category">Category  : </label>
         <div className="checkbox-container">
         <select id="category" {...register("selectedCategory", { required: "Select the Category field" })} className={`form-select ${errors.selectedCategory && "invalid"
           }`}>
           <option value="">Select Branch</option>.
           <option value="open">Open</option>.
           <option value="sc">SC</option>.
           <option value="st">ST</option>.
           <option value="obc">OBC</option>.
           <option value="sbc">SBC</option>.
           <option value="vj/dt">VJ/DT</option>.
           <option value="nt-a">NT-A</option>.
           <option value="nt-b">NT-B</option>.
           <option value="nt-c">NT-C</option>.
           <option value="nt-d">NT-D</option>.
           <option value="ews">EWS</option>.
           <option value="minority">MINORITY</option>.
         </select>
        
       </div>
       {errors.selectedCategory && (
           <small className="text-danger">
             {errors.selectedCategory.message}
           </small>
         )}
     </div>



        <div className="input-wrapper mt-3">
          <label className="mr-5 minority-label">Do you belong to Minority Type Candidature? : </label>
          <div className="gender-container">
            <label className="mr-5" htmlFor="minorityYes">Yes</label>
            <input
              {...register('selectedMinority', { required: "This field is required" })}
              className={`form-check-input ${errors.selectedMinority && "invalid"
                }`}
              type="radio"
              value="yes"
              id="minorityYes"
            />

          </div>

          <div className="gender-container1">
            <label className="mr-5" htmlFor="minorityNo">No</label>
            <input
              {...register('selectedMinority', { required: "This field is required" })}
              className={`form-check-input ${errors.selectedMinority && "invalid"
                }`}
              type="radio"
              value="no"
              id="minorityNo"
            />

          </div>
          {errors.selectedMinority && (
            <small className="text-danger">
              {errors.selectedMinority.message}
            </small>
          )}
        </div>



        <div className="input-wrapper mt-3">
          <label className="mr-5 minority-label">Do You belong to Person with Disability Type Candidature? : </label>
          <div className="gender-container">
            <label className="mr-5" htmlFor="disabilityYes">Yes</label>
            <input
              {...register('selectedDisability', { required: "This field is required" })}
              className={`form-check-input ${errors.selectedDisability && "invalid"
                }`}
              type="radio"
              value="yes"
              id="disabilityYes"
            />

          </div>

          <div className="gender-container1">
            <label className="mr-5" htmlFor="disabilityNo">No</label>
            <input
              {...register('selectedDisability', { required: "This field is required" })}
              className={`form-check-input ${errors.selectedDisability && "invalid"
                }`}
              type="radio"
              value="no"
              id="disabilityNo"
            />

          </div>
          {errors.selectedDisability && (
            <small className="text-danger">
              {errors.selectedDisability.message}
            </small>
          )}
        </div>
        <div className="input-wrapper mt-3">
          <label className="mr-5 minority-label">Do You belong to Defence Type Candidature? : </label>
          <div className="gender-container">
            <label className="mr-5" htmlFor="defenceYes">Yes</label>
            <input
              {...register('selectedDefence', { required: "This field is required" })}
              className={`form-check-input ${errors.selectedDefence && "invalid"
                }`}
              type="radio"
              value="yes"
              id="defenceYes"
            />

          </div>

          <div className="gender-container1">
            <label className="mr-5" htmlFor="defenceNo">No</label>
            <input
              {...register('selectedDefence', { required: "This field is required" })}
              className={`form-check-input ${errors.selectedDefence && "invalid"
                }`}
              type="radio"
              value="no"
              id="defenceNo"
            />

          </div>
          {errors.selectedDefence && (
            <small className="text-danger">
              {errors.selectedDefence.message}
            </small>
          )}
        </div>

        <div className="input-wrapper">
          <label className="form-label">Correspondence Address : </label>

          <div className="input-container">
            <textarea
              type="text"
              className={`form-control ${errors.studCAddress && "invalid"
                }`}
              {...register("studCAddress", {
                required: "Student Correspondence Address is required",

              })}
              onKeyUp={() => {
                trigger("studCAddress");
              }}
            />
            {errors.studCAddress && (
              <small className="text-danger">
                {errors.studCAddress.message}
              </small>
            )}
          </div>
        </div>

        <div className="input-wrapper">
          <label className="form-label">City/Village : </label>

          <div className="input-container">
            <input
              type="text"
              className={`form-control ${errors.studCCity && "invalid"
                }`}
              {...register("studCCity", {
                required: "Student Correspondence Address city/village is required",

              })}
              onKeyUp={() => {
                trigger("studCCity");
              }}
            />
            {errors.studCCity && (
              <small className="text-danger">
                {errors.studCCity.message}
              </small>
            )}
          </div>
        </div>

        <div className="input-wrapper mt-3">
          <label className="mr-5 minority-label">Area :</label>
          <div className="gender-container">
            <label className="mr-5" htmlFor="curban">Urban</label>
            <input
              {...register('selectedCUrban', { required: "This field is required" })}
              className={`form-check-input ${errors.selectedCUrban && "invalid"
                }`}
              type="radio"
              value="urban"
              id="curban"
            />

          </div>

          <div className="gender-container1">
            <label className="mr-5" htmlFor="crural">Rural</label>
            <input
              {...register('selectedCUrban', { required: "This field is required" })}
              className={`form-check-input ${errors.selectedCUrban && "invalid"
                }`}
              type="radio"
              value="no"
              id="crural"
            />

          </div>
          {errors.selectedCUrban && (
            <small className="text-danger">
              {errors.selectedCUrban.message}
            </small>
          )}
        </div>
        <div className="input-wrapper">
          <label className="form-label">Pincode : </label>

          <div className="input-container">
            <input
              type="text"
              className={`form-control ${errors.studCPincode && "invalid"
                }`}
              {...register("studCPincode", {
                required: "Pincode number is required",
                pattern: {
                  value:
                    /(^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$)/,
                  message: "Invalid Pincode Number",
                },
              })}
              onKeyUp={() => {
                trigger("studCPincode");
              }}
            />
            {errors.studCPincode && (
              <small className="text-danger">
                {errors.studCPincode.message}
              </small>
            )}
          </div>
        </div>

        <div className="input-wrapper">
          <label className="form-label">Taluka : </label>

          <div className="input-container">
            <input
              type="text"
              className={`form-control ${errors.studCTaluka && "invalid"
                }`}
              {...register("studCTaluka", {
                required: "Correspondence address Taluka is required",

              })}
              onKeyUp={() => {
                trigger("studCTaluka");
              }}
            />
            {errors.studCTaluka && (
              <small className="text-danger">
                {errors.studCTaluka.message}
              </small>
            )}
          </div>
        </div>

        <div className="input-wrapper">
          <label className="form-label">District : </label>

          <div className="input-container">
            <input
              type="text"
              className={`form-control ${errors.studCDistrict && "invalid"
                }`}
              {...register("studCDistrict", {
                required: "Correspondece address District is required",

              })}
              onKeyUp={() => {
                trigger("studCDistrict");
              }}
            />
            {errors.studCDistrict && (
              <small className="text-danger">
                {errors.studCDistrict.message}
              </small>
            )}
          </div>
        </div>

        <div className="input-wrapper">
          <label className="form-label">State : </label>

          <div className="input-container">
            <input
              type="text"
              className={`form-control ${errors.studCState && "invalid"
                }`}
              {...register("studCState", {
                required: "Correspondece address State is required",

              })}
              onKeyUp={() => {
                trigger("studCState");
              }}
            />
            {errors.studCState && (
              <small className="text-danger">
                {errors.studCState.message}
              </small>
            )}
          </div>
        </div>
          
          <input type="checkbox" value="sameAddress" name="sameAddress" onChange={handleAddress}></input>

        <div className="input-wrapper">
          <label className="form-label">Permanent Address : </label>

          <div className="input-container">
            <textarea
              type="text"
              className={`form-control ${errors.studPAddress && "invalid"
                }`}
              {...register("studPAddress", {
                required: "Student Permanent address is required",

              })}
              onKeyUp={() => {
                trigger("studPAddress");
              }}
            />
            {errors.studPAddress && (
              <small className="text-danger">
                {errors.studPAddress.message}
              </small>
            )}
          </div>
        </div>

        <div className="input-wrapper">
          <label className="form-label">City/Village : </label>

          <div className="input-container">
            <input
              type="text"
              className={`form-control ${errors.studPCity && "invalid"
                }`}
              {...register("studPCity", {
                required: "Student Permanent address City/Village is required",

              })}
              onKeyUp={() => {
                trigger("studPCity");
              }}
            />
            {errors.studPCity && (
              <small className="text-danger">
                {errors.studPCity.message}
              </small>
            )}
          </div>
        </div>

        <div className="input-wrapper mt-3">
          <label className="mr-5 minority-label">Area :</label>
          <div className="gender-container">
            <label className="mr-5" htmlFor="purban">Urban</label>
            <input
              {...register('selectedPUrban', { required: "This field is required" })}
              className={`form-check-input ${errors.selectedPUrban && "invalid"
                }`}
              type="radio"
              value="urban"
              id="purban"
            />

          </div>

          <div className="gender-container1">
            <label className="mr-5" htmlFor="prural">Rural</label>
            <input
              {...register('selectedPUrban', { required: "This field is required" })}
              className={`form-check-input ${errors.selectedCPrban && "invalid"
                }`}
              type="radio"
              value="no"
              id="prural"
            />

          </div>
          {errors.selectedPUrban && (
            <small className="text-danger">
              {errors.selectedPUrban.message}
            </small>
          )}
        </div>

        <div className="input-wrapper">
          <label className="form-label">Pincode : </label>

          <div className="input-container">
            <input
              type="text"
              className={`form-control ${errors.studPPincode && "invalid"
                }`}
              {...register("studPPincode", {
                required: "Pincode is required",
                pattern: {
                  value:
                    /(^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$)/,
                  message: "Invalid Pincode Number",
                },
              })}
              onKeyUp={() => {
                trigger("studPPincode");
              }}
            />
            {errors.studPPincode && (
              <small className="text-danger">
                {errors.studPPincode.message}
              </small>
            )}
          </div>
        </div>

        <div className="input-wrapper">
          <label className="form-label">Taluka : </label>

          <div className="input-container">
            <input
              type="text"
              className={`form-control ${errors.studPTaluka && "invalid"
                }`}
              {...register("studPTaluka", {
                required: "Student Permanent address Taluka is required",

              })}
              onKeyUp={() => {
                trigger("studPTaluka");
              }}
            />
            {errors.studPTaluka && (
              <small className="text-danger">
                {errors.studPTaluka.message}
              </small>
            )}
          </div>
        </div>

        <div className="input-wrapper">
          <label className="form-label">District : </label>

          <div className="input-container">
            <input
              type="text"
              className={`form-control ${errors.studPDistrict && "invalid"
                }`}
              {...register("studPDistrict", {
                required: "Student Permanent address District is required",

              })}
              onKeyUp={() => {
                trigger("studPDistrict");
              }}
            />
            {errors.studPDistrict && (
              <small className="text-danger">
                {errors.studPDistrict.message}
              </small>
            )}
          </div>
        </div>

        <div className="input-wrapper">
          <label className="form-label">State : </label>

          <div className="input-container">
            <input
              type="text"
              className={`form-control ${errors.studPState && "invalid"
                }`}
              {...register("studPState", {
                required: "Student Permanent address State is required",

              })}
              onKeyUp={() => {
                trigger("studPState");
              }}
            />
            {errors.studPState && (
              <small className="text-danger">
                {errors.studPState.message}
              </small>
            )}
          </div>
        </div>
      </div>
      <div className="form-right-container col-md-4">
        <div id="registerImage">
        <img className="image" src={profile} alt=""/>
          <input
            type="file"
            name="profile"
            accept="image/png"
            onChange={registerDataChange}
            required
          />
          <span>Upload .png Image as Profile Photo</span>
        </div> 
         
          <button className="btn btn-success mt-3" onClick={handleProfileImage}>{uploadButtonLabel}</button>
        <input
          type="text"
          {...register("studSign")}
          placeholder="Sign"
          className="form-control mt-3"
        />
      </div>
    </div>
  </div>
</div>
</section>

    </Stack>
  );
};
