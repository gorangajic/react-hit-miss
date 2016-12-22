# React Hit Miss Component

> jsx conditional rendering inspired by react-router v4

```
npm install react-hit-miss --save
```

### example

```jsx
import HitMiss, { Hit, Miss } from 'react-hit-miss';

const Awesome = ({ error, items, loading }) => (<HitMiss>
    <Hit
        check={error}
        component={() => (<div>
            {error}
        </div>)}
    />
    <Hit
        check={items && items.length > 0}
        component={() => (<div>
            {items.map(item => <Item {...item} />)}
        </div>)}
    <Hit
        check={loading}
        component={() => <LoadingSpinner />}
    />
    <Miss
        component={() => (<div>
            No items found
        </div>)}
    />
</HitMiss>);
```