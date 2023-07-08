import React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import { Box } from "@mui/material";

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
    // Simulating API call
    this.fetchSkills();
  }

  fetchSkills = () => {
    // Simulating API call to get available skills
    const availableSkills = [
      {
        id: "232f03e5-bacc-43a6-b702-01b20c093280",
        group_name: "PostgreSQL",
      },
      {
        id: "1167a815-b626-4ff7-9e19-0d98d6603e3e",
        group_name: "Python",
      },
      {
        id: "1e9898b8-0c65-453a-a8ab-fd5d8cfaf68b",
        group_name: "Networking",
      },
      {
        id: "fe5c4b85-55d9-489d-8b3d-1ea12c541439",
        group_name: "Penetration testing",
      },
      {
        id: "42482d56-72a6-4576-a669-bea82b1a2ee6",
        group_name: "Accounting",
      },
      {
        id: "415f145e-d01f-4e45-80c9-a0ef1f88f7ec",
        group_name: "Finance",
      },
    ];
    this.setState({ availableSkills });
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
    console.log(skills);

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
        {search !== "" ?
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
        : <ul>Find desired skills by typing above</ul>}
      </div>
    );
  }
}

export default SkillSelector;
