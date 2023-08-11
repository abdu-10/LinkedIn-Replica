import React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import { Box } from "@mui/material";
import { getAllJobTags } from "../../../api/admin/adminApis";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

class SkillSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [],
      search: "",
      availableSkills: [],
      selectedSkills: [],
    };
  }

  componentDidMount() {
    // API call
    this.fetchSkills();
  }  

  fetchSkills = () => {
    getAllJobTags().then((res) => this.setState({ availableSkills: res.data }))
  };

  handleSearchChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleSkillClick = (skillId) => {
    const { availableSkills, skills, selectedSkills } = this.state;
    const skill = availableSkills.find((skill) => skill.id === skillId);
    if (skill) {
      // use this to populate skills array
      const newSkills = [...skills, skill.id];
      //   use this to render the selected skills
      const pickedSkills = [...selectedSkills, skill];
      this.setState({
        skills: newSkills,
        search: "",
        selectedSkills: pickedSkills,
      });
    }
  };

  handleSkillRemove = (skillId) => {
    const { skills, selectedSkills } = this.state;
    const newSkills = selectedSkills.filter((skill) => skill.id !== skillId);
    // MAPS the filtered array to only return ids
    const skillIds = newSkills.map((skill) => skill.id);
    // set the skills array with remaining skill ids, while setting the selceted
    // skills less the removed skill
    this.setState({ skills: skillIds, selectedSkills: newSkills });
  };

  render() {
    const { skills, search, availableSkills, selectedSkills } = this.state;
    
    this.props.func(skills)

    // props.func(skills);

    return (
      <div>
        <Box
          Paper
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            listStyle: "none",
            p: 0.5,
            m: 0,
          }}
          component="ul"
        >
          {selectedSkills.map((skill) => (
            <ListItem key={skill.id}>
              <Chip
                label={skill.group_name}
                variant="outlined"
                color="success"
                onDelete={() => this.handleSkillRemove(skill.id)}
              />
            </ListItem>
          ))}
        </Box>
        <input
          type="text"
          value={search}
          onChange={this.handleSearchChange}
          placeholder="Search skills..."
        />
        {search !== "" ? (
          <ul>
            {availableSkills
              .filter((skill) =>
                skill.group_name.toLowerCase().includes(search.toLowerCase())
              )
              .map((skill) => (
                <li
                  key={skill.id}
                  onClick={() => this.handleSkillClick(skill.id)}
                >
                  {skill.group_name}
                </li>
              ))}{" "}
          </ul>
        ) : (
          <ul>Find desired skills by typing above</ul>
        )}
      </div>
    );
  }
}

export default SkillSelector;
