import axios from "axios";
const API__URL= 'https://opentdb.com/api.php?amount=10&type=multiple';

class QuizFetcher{
    static async fetch(){
        const response=await axios.get(API__URL);
        return response.data;
    }
}

export default QuizFetcher;