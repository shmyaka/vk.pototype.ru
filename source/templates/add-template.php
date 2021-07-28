<section class="content__side">
    <h2 class="content__side-heading">Проекты</h2>

    <nav class="main-navigation">
        <ul class="main-navigation__list">
            <?php foreach ($projects as $project) : ?>
                <?= (include_template('list-item.php', [
                    'project' => $project,
                    'show_complete_tasks' => null
                ])); ?>
            <?php endforeach ?>
        </ul>
    </nav>

    <a class="button button--transparent button--plus content__side-button" href="form-project.html">Добавить проект</a>
</section>

<main class="content__main">
    <h2 class="content__main-heading">Добавление задачи</h2>

    <form class="form"  action="<?= get_link_href_given_show_completed('/add.php', $show_complete_tasks) ?>"
    method="post" enctype="multipart/form-data" autocomplete="off">
        <div class="form__row">
            <label class="form__label" for="name">Название <sup>*</sup></label>

            <input class="form__input <?= isset($errors['name']) ? 'form__input--error' : '' ?>"
                   type="text" name="name" id="name"
                   value="<?= isset($new_task['name']) ? htmlspecialchars($new_task['name']) : '' ?>"
                   placeholder="Введите название"
            >
            <?php if (isset($errors['name'])) : ?>
            <p class="form__message">
                <?= $errors['name'] ?>
            </p>
            <?php endif; ?>
        </div>

        <div class="form__row">
            <label class="form__label" for="project">Проект <sup>*</sup></label>

            <select class="form__input form__input--select <?= isset($errors['project']) ? 'form__input--error' : '' ?>"
                    name="project" id="project">
                <?php foreach ($projects as $project) : ?>
                    <option value="<?= $project['id'] ?>"
                    <?= (isset($new_task['project']) && ((int)$new_task['project'] === $project['id'])) ? 'selected' : '' ?>
                    ><?= $project['name'] ?></option>
                <?php endforeach ?>

            </select>
            <?php if (isset($errors['project'])) : ?>
                <p class="form__message">
                    <?= $errors['project'] ?>
                </p>
            <?php endif; ?>
        </div>

        <div class="form__row">
            <label class="form__label" for="date">Дата выполнения</label>

            <input class="form__input form__input--date <?= isset($errors['date']) ? 'form__input--error' : '' ?>"
                   type="text" name="date" id="date"
                   value="<?= isset($new_task['date']) ? htmlspecialchars($new_task['date']) : '' ?>"
                   placeholder="Введите дату в формате ГГГГ-ММ-ДД">
            <?php if (isset($errors['date'])) : ?>
                <p class="form__message">
                    <?= $errors['date'] ?>
                </p>
            <?php endif; ?>
        </div>

        <div class="form__row">
            <label class="form__label" for="file">Файл</label>

            <div class="form__input-file">
                <input class="visually-hidden" type="file" name="file" id="file" value="">

                <label class="button button--transparent" for="file">
                    <span>Выберите файл</span>
                </label>
            </div>
        </div>

        <div class="form__row form__row--controls">
            <input class="button" type="submit" name="" value="Добавить">
        </div>
    </form>
</main>