import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { updateRecipeFormData } from '../actions/recipeForm';
import { createRecipe } from '../actions/recipeActions';

class RecipeForm extends Component {

  handleOnChange = event => {
    const {name, value} = event.target;
    const currentRecipeFormData = Object.assign({}, this.props.recipeFormData, {
      [name]: value
    })
    this.props.updateRecipeFormData(currentRecipeFormData)
  }

  handleOnSubmit = e => {
    e.preventDefault();
    const { createRecipe, recipeFormData, history} = this.props;
		createRecipe(recipeFormData, history);
  }

  render() {
    const { name, ingredients, directions, cook_time} = this.props.recipeFormData;

    return (
      <div>
        <h1>Create a New Recipe</h1>

      <form onSubmit={this.handleOnSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            onChange={this.handleOnChange}
            name="name"
            value={name}
          />
        </div>

        <div>
          <label htmlFor="ingredients">Ingredients:</label>
          <input
            type="text"
            onChange={this.handleOnChange}
            name="ingredients"
            value={ingredients}
          />
        </div>

        <div>
          <label htmlFor="directions">Directions:</label>
          <input
            type="text"
            onChange={this.handleOnChange}
            name="directions"
            value={directions}
          />
        </div>

        <div>
          <label htmlFor="cook_time">Cook Time:</label>
          <input
            type="text"
            onChange={this.handleOnChange}
            name="cook_time"
            value={cook_time}
          />

          <button type="submit">Add Recipe</button>
        </div>
      </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    recipeFormData: state.recipeFormData
  }
}

export default connect(mapStateToProps, {
  updateRecipeFormData,
  createRecipe
})(RecipeForm);
