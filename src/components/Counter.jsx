import Button from "./Button";
import Count from "./Count";

export default function Counter({ count, onIncrement, onDecrement }) {
    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <Count count={count || 0} />
            <div className="flex space-x-3">
                <Button type="danger" handler={onDecrement}>Decrement</Button>
                <Button handler={onIncrement}>Increment</Button>
            </div>
        </div>
    );
}